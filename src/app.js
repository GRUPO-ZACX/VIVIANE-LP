(() => {
 'use strict';
 const {reactions,answers}=JSON.parse(document.getElementById('site-data').textContent);
 const dialog=document.getElementById('site-dialog');
 const mobile=()=>matchMedia('(max-width:1100px)').matches;
 const pagePaths={home:'./index.html',catalogo:'./catalogo.html',avaliacoes:'./avaliacoes.html'};
 const pageIds={'7:8':'home','144:448':'home','117:160':'catalogo','142:304':'catalogo','116:86':'avaliacoes','143:304':'avaliacoes'};
 const modalIds={'138:320':'destaque','142:318':'destaque','138:338':'harmonizacao','142:340':'harmonizacao','138:356':'perfil','142:362':'perfil','138:374':'labios','142:384':'labios','138:392':'lifting','142:406':'lifting','138:410':'rino','142:428':'rino','138:428':'aptos','142:450':'aptos','145:498':'menu'};
 const sectionIds={'7:4':'inicio','144:449':'inicio','144:452':'inicio','81:546':'galeria','144:526':'galeria','105:54':'contato','144:586':'contato','115:102':'perguntas','144:532':'perguntas','143:305':'inicio','116:108':'depoimentos'};
 reactions['129:496']={id:'129:496',name:'Confira os comentários',r:[{t:{type:'ON_CLICK'},a:[{type:'NODE',destinationId:'116:108',navigation:'SCROLL_TO'}]}]};
 const duration=()=>matchMedia('(prefers-reduced-motion:reduce)').matches?0:(mobile()?250:320);
 let previousFocus=null,closing=false;
 const byNode=(id,root=document)=>[...root.querySelectorAll('[data-node-id]')].filter(n=>n.dataset.nodeId===id);
 const visibleRoot=()=>document.querySelector('.page-view.'+(mobile()?'mobile-view':'desktop-view'));
 function go(page,section){
  if(page===document.body.dataset.page){if(dialog.open)close();const target=section?visibleRoot().querySelector('[data-section="'+section+'"]'):visibleRoot();target?.scrollIntoView({behavior:duration()?'smooth':'instant',block:'start'});return;}
  document.body.classList.add('site-leaving');setTimeout(()=>location.href=pagePaths[page]+(section?'#'+section:''),duration());
 }
 function open(name){
  if(dialog.open)dialog.close();previousFocus=document.activeElement;
  dialog.innerHTML=document.getElementById('overlay-'+name).innerHTML;
  dialog.dataset.overlay=name;dialog.setAttribute('aria-label',name==='menu'?'Menu de navegação':'Detalhes do procedimento');
  wire(dialog);dialog.showModal();document.documentElement.style.overflow='hidden';
  const closeButton=dialog.querySelector('.'+(mobile()?'mobile-view':'desktop-view')+' [data-name="Fechar modal"],.'+(mobile()?'mobile-view':'desktop-view')+' [data-name="Fechar menu"]');
  closeButton?.focus({preventScroll:true});
 }
 function close(){if(closing||!dialog.open)return;closing=true;dialog.classList.add('site-closing');const ms=duration()?(dialog.dataset.overlay==='menu'?180:220):0;setTimeout(()=>{dialog.close();dialog.innerHTML='';dialog.classList.remove('site-closing');document.documentElement.style.overflow='';closing=false;previousFocus?.focus({preventScroll:true});},ms);}
 function destination(action,row){
  if(action.type==='URL'){if(action.url.startsWith('tel:'))location.href=action.url;else window.open(action.url,action.openInNewTab?'_blank':'_self','noopener,noreferrer');return;}
  if(action.type==='CLOSE'){close();return;}
  if(action.type!=='NODE')return;
  const id=action.destinationId;
  if(action.navigation==='OVERLAY'){if(modalIds[id])open(modalIds[id]);return;}
  if(action.navigation==='CHANGE_TO')return;
  if(action.navigation==='SCROLL_TO'){go(id.startsWith('143:')||id.startsWith('116:')?'avaliacoes':'home',sectionIds[id]||'inicio');return;}
  if(pageIds[id]){const name=row.name.toLowerCase();let section;if(name.includes('galeria'))section='galeria';else if(name.includes('faq'))section='perguntas';else if(name.includes('contato'))section='contato';go(pageIds[id],section);}
 }
 function wire(root){
  for(const el of root.querySelectorAll('[data-node-id]')){
   const row=reactions[el.dataset.nodeId];if(!row)continue;
   if(row.r.some(r=>r.t.type==='ON_HOVER'))el.dataset.hover=el.dataset.nodeId==='81:301'?'hero':'button';
   const click=row.r.find(r=>r.t.type==='ON_CLICK');if(!click||click.a.every(a=>a.navigation==='CHANGE_TO'))continue;
   el.dataset.clickable='';el.dataset.actionNode=el.dataset.nodeId;
   const action=click.a[0];
   if(!el.textContent.trim()&&action.navigation==='OVERLAY')el.setAttribute('aria-label','Ver detalhes do procedimento');
   if(el.tagName==='A'){
    if(action.type==='URL')el.href=action.url;
    else if(action.navigation==='NAVIGATE'&&pageIds[action.destinationId])el.href=pagePaths[pageIds[action.destinationId]];
    else if(action.navigation==='SCROLL_TO')el.href='./index.html#'+(sectionIds[action.destinationId]||'inicio');
    else el.href='#';
   }else if(!['BUTTON','INPUT'].includes(el.tagName)){el.tabIndex=0;el.setAttribute('role','button');}
  }
  for(const el of root.querySelectorAll('[data-name]')){
   const name=el.dataset.name;
   if(name.startsWith('Fora do')||name.startsWith('Fechar')){el.dataset.close='';el.setAttribute('aria-label',name.startsWith('Fora')?'Fechar janela':name);}
   if(name==='Menu / modal compacto'){el.setAttribute('role','navigation');el.setAttribute('aria-label','Navegação principal');}
  }
  for(const b of root.querySelectorAll('button'))if(b.textContent.includes('Fechar e voltar ao catálogo'))b.dataset.close='';
  for(const p of root.querySelectorAll('p'))if(p.textContent.trim()==='Voltar ao topo ↑'){p.dataset.top='';p.dataset.clickable='';p.tabIndex=0;p.setAttribute('role','button');}
  for(const a of root.querySelectorAll('a[target="_blank"]'))a.rel='noopener noreferrer';
 }
 document.addEventListener('click',event=>{
  const el=event.target.closest('[data-close],[data-menu-route],[data-action-node],[data-top],[data-gallery-direction],.faq-item');if(!el)return;
  if(el.hasAttribute('data-gallery-direction')){const track=el.closest('.site-gallery').querySelector('.site-gallery-track'),item=track.firstElementChild;const gap=parseFloat(getComputedStyle(track).gap)||0;track.scrollBy({left:Number(el.dataset.galleryDirection)*(item.getBoundingClientRect().width+gap),behavior:duration()?'smooth':'instant'});return;}
  if(el.hasAttribute('data-top')){event.preventDefault();go(document.body.dataset.page);return;}
  if(el.hasAttribute('data-close')){event.preventDefault();close();return;}
  if(el.classList.contains('faq-item')){event.preventDefault();toggleFaq(el);return;}
  if(el.dataset.menuRoute){event.preventDefault();go(el.dataset.menuRoute);return;}
  const row=reactions[el.dataset.actionNode],r=row?.r.find(r=>r.t.type==='ON_CLICK');if(!r)return;
  event.preventDefault();destination(r.a[0],row);
 });
 document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-clickable]:not(button):not(a)')){e.preventDefault();e.target.click();}});
 dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 function faqSetup(){
  for(const scope of document.querySelectorAll('[data-node-id="115:102"],[data-node-id="144:532"]')){
   let index=0;
   for(const button of scope.querySelectorAll('button')){
    const header=button.querySelector('[data-name="Cabeçalho"]');if(!header)continue;
    const i=index++,expanded=button.children.length>1;
    const existing=expanded?button.lastElementChild:null;
    const answer=existing?.textContent.trim()||answers[i]||'';
    if(existing)existing.remove();
    button.classList.add('faq-item');button.setAttribute('aria-expanded',String(expanded));
    const panel=document.createElement('div');panel.className='faq-answer';panel.id='faq-'+(scope.closest('.mobile-view')?'mobile':'desktop')+'-'+i;panel.setAttribute('aria-hidden',String(!expanded));
    const inner=document.createElement('div'),p=document.createElement('p');p.textContent=answer;inner.append(p);panel.append(inner);button.append(panel);button.setAttribute('aria-controls',panel.id);
   }
  }
 }
 function toggleFaq(button){const scope=button.closest('[data-node-id="115:102"],[data-node-id="144:532"]');const was=button.getAttribute('aria-expanded')==='true';for(const b of scope.querySelectorAll('.faq-item')){b.setAttribute('aria-expanded','false');b.querySelector('.faq-answer').setAttribute('aria-hidden','true');b.querySelector('[data-name="Cabeçalho"]>p:last-child').textContent='+';}if(!was){button.setAttribute('aria-expanded','true');button.querySelector('.faq-answer').setAttribute('aria-hidden','false');button.querySelector('[data-name="Cabeçalho"]>p:last-child').textContent='−';}}
 // As âncoras representam os mesmos destinos do protótipo em cada breakpoint.
 for(const [id,section] of Object.entries(sectionIds))for(const n of byNode(id))n.dataset.section=section;
 for(const n of byNode('7:8'))n.dataset.section='inicio';
 for(const n of byNode('143:304'))n.dataset.section='inicio';
 wire(document);faqSetup();
 // Rotas do menu compacto são compartilhadas entre as três páginas.
 const menu=document.getElementById('overlay-menu');for(const [id,page] of [['145:503','home'],['145:506','avaliacoes'],['145:509','catalogo']])for(const n of byNode(id,menu.content)){n.dataset.menuRoute=page;n.href=pagePaths[page];}
 document.body.classList.add('site-entering');
 if(location.hash){requestAnimationFrame(()=>visibleRoot().querySelector('[data-section="'+location.hash.slice(1).replace(/[^a-z]/g,'')+'"]')?.scrollIntoView({block:'start'}));}
 // Arrastar com mouse complementa o deslize nativo da galeria no celular.
 for(const track of document.querySelectorAll('[data-name="Resultados / deslize"],.site-gallery-track,.site-review-track')){
  let start=null,left=0;track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){start=e.clientX;left=track.scrollLeft;track.setPointerCapture(e.pointerId);}});track.addEventListener('pointermove',e=>{if(start!==null)track.scrollLeft=left+start-e.clientX;});track.addEventListener('pointerup',()=>start=null);track.addEventListener('pointercancel',()=>start=null);
 }
 for(const gallery of document.querySelectorAll('.site-gallery')){
  const track=gallery.querySelector('.site-gallery-track'),buttons=gallery.querySelectorAll('[data-gallery-direction]');
  const update=()=>{buttons[0].disabled=track.scrollLeft<2;buttons[1].disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;};
  track.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
 }
})();
