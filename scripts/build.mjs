import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {build,transform} from 'esbuild';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {utilities} from './utilities.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
await fs.mkdir(path.join(root,'.build'),{recursive:true});
// O JSX é convertido na compilação; o navegador recebe somente HTML, CSS e JS.
await build({entryPoints:[path.join(root,'src/render.tsx')],outfile:path.join(root,'.build/render.cjs'),bundle:true,platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom/server'],logLevel:'warning'});
const require=createRequire(import.meta.url),{Page,Overlay,overlays}=require(path.join(root,'.build/render.cjs'));
const reactions=JSON.parse(await fs.readFile(path.join(root,'src/prototype.json'),'utf8'));
const faqSource=await fs.readFile(path.join(root,'src/screens/7-8.tsx'),'utf8');
const answers=[...faqSource.matchAll(/resposta="([^"]+)"/g)].map(m=>m[1]);
answers.unshift('Entre em contato pelo telefone +55 61 99181-7984 para consultar os horários disponíveis e agendar sua avaliação.');
const state=JSON.stringify({reactions,answers}).replace(/</g,'\\u003c');
// A foto principal é carregada apenas para a versão de tela em uso.
// Fotos abaixo da primeira dobra aguardam a aproximação da área visível.
function imageDelivery(markup){
 return markup.replace(/<link rel="preload"[^>]+\/>/g,'').replace(/<img\b[^>]*>/g,tag=>{
  const src=tag.match(/\bsrc="([^"]+)"/)?.[1];
  if(!src?.endsWith('.webp'))return tag;
  tag=tag.replace(/\s(?:loading|decoding|fetchpriority)="[^"]*"/gi,'');
  const desktop=src.endsWith('7-8-imgHome.webp'),mobile=src.endsWith('144-448-imgInicioMobile.webp');
  if(desktop||mobile){
   const fallback='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
   tag=tag.replace(/\bsrc="[^"]+"/,'src="'+fallback+'"').replace(/\/?>$/,' loading="eager" fetchpriority="high" decoding="async"/>');
   return `<picture><source media="(${desktop?'min-width:1101px':'max-width:1100px'})" srcset="${src}">${tag}</picture>`;
  }
  return tag.replace(/\/?>$/,' loading="lazy" decoding="async"/>');
 });
}
let templates='';
for(const name of Object.keys(overlays))templates+=`<template id="overlay-${name}">${imageDelivery(renderToStaticMarkup(React.createElement(Overlay,{name})))}</template>`;
let all='';
const titles={home:'Viviane Bondi — Estética Avançada',catalogo:'Catálogo de Procedimentos — Viviane Bondi',avaliacoes:'Avaliações de clientes — Viviane Bondi'};
for(const name of Object.keys(titles)){
 let content=imageDelivery(renderToStaticMarkup(React.createElement(Page,{name})));
 all+=content+templates;
 const html=`<!doctype html>\n<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#1c2f2c"><meta name="description" content="Viviane Bondi Estética Avançada em Brasília. Conheça os procedimentos, resultados e experiências de nossas clientes."><title>${titles[name]}</title><link rel="preload" href="./assets/fonts/DMSans-Variable.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="./styles.css"><script src="./app.js" defer></script></head><body data-page="${name}"><a class="site-skip" href="#main">Pular para o conteúdo</a>${content}<dialog id="site-dialog" aria-label="Detalhes do procedimento"></dialog>${templates}<script id="site-data" type="application/json">${state}</script></body></html>`;
 await fs.writeFile(path.join(root,name==='home'?'index.html':name+'.html'),html);
}
const base=await fs.readFile(path.join(root,'src/base.css'),'utf8');
await fs.writeFile(path.join(root,'styles.css'),(await transform(utilities(all)+'\n'+base,{loader:'css',minify:true})).code);
await fs.writeFile(path.join(root,'app.js'),(await transform(await fs.readFile(path.join(root,'src/app.js'),'utf8'),{loader:'js',minify:true,target:'es2020'})).code);
// A hospedagem recebe apenas os arquivos usados pelo navegador.
const output=path.join(root,'dist');
await fs.rm(output,{recursive:true,force:true});
await fs.mkdir(output,{recursive:true});
for(const file of ['index.html','catalogo.html','avaliacoes.html','styles.css','app.js','.nojekyll']){
 await fs.copyFile(path.join(root,file),path.join(output,file));
}
await fs.cp(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
console.log('Prontas: index.html, catalogo.html, avaliacoes.html — arquivos locais e pasta dist/ para publicação.');
