// Traduz o vocabulário do Figma para CSS local. Não há Tailwind no site.
const simple = {
  relative:'position:relative',absolute:'position:absolute',fixed:'position:fixed',block:'display:block',inline:'display:inline','inline-block':'display:inline-block','inline-grid':'display:inline-grid',flex:'display:flex',grid:'display:grid',hidden:'display:none','col-1':'grid-column-start:1','row-1':'grid-row-start:1','content-center':'align-content:center','place-items-start':'place-items:start','text-right':'text-align:right','left-1/2':'left:50%','ml-0':'margin-left:0','mt-0':'margin-top:0','mask-alpha':'mask-mode:alpha','mask-intersect':'mask-composite:intersect','mask-no-clip':'mask-clip:no-clip','mask-no-repeat':'mask-repeat:no-repeat',
  'flex-col':'flex-direction:column','flex-row':'flex-direction:row','flex-wrap':'flex-wrap:wrap','flex-nowrap':'flex-wrap:nowrap','shrink-0':'flex-shrink:0','grow':'flex-grow:1',
  'items-start':'align-items:flex-start','items-center':'align-items:center','items-end':'align-items:flex-end','items-stretch':'align-items:stretch',
  'justify-center':'justify-content:center','justify-between':'justify-content:space-between','justify-start':'justify-content:flex-start','justify-end':'justify-content:flex-end',
  'content-stretch':'align-content:stretch','content-start':'align-content:flex-start','self-stretch':'align-self:stretch',
  'w-full':'width:100%','h-full':'height:100%','size-full':'width:100%;height:100%','min-w-full':'min-width:100%','min-w-px':'min-width:1px','min-h-px':'min-height:1px','max-w-none':'max-width:none',
  'inset-0':'inset:0','left-0':'left:0','right-0':'right:0','top-0':'top:0','bottom-0':'bottom:0',
  'overflow-clip':'overflow:clip','overflow-hidden':'overflow:hidden','overflow-x-auto':'overflow-x:auto','overflow-y-clip':'overflow-y:clip','overflow-y-auto':'overflow-y:auto',
  'pointer-events-none':'pointer-events:none','cursor-pointer':'cursor:pointer','object-cover':'object-fit:cover','object-contain':'object-fit:contain',
  'border':'border-width:1px','border-b':'border-bottom-width:1px','border-t':'border-top-width:1px','border-solid':'border-style:solid',
  'bg-white':'background-color:#fff','text-white':'color:#fff','text-left':'text-align:left','text-center':'text-align:center',
  'font-normal':'font-weight:400','font-medium':'font-weight:500','font-semibold':'font-weight:600','font-bold':'font-weight:700','not-italic':'font-style:normal',
  'whitespace-nowrap':'white-space:nowrap','whitespace-pre-wrap':'white-space:pre-wrap','mb-0':'margin-bottom:0','rounded-full':'border-radius:9999px',
  '-translate-x-1/2':'--tx:-50%;transform:translate(var(--tx,0),var(--ty,0))','-translate-y-1/2':'--ty:-50%;transform:translate(var(--tx,0),var(--ty,0))',
  'bg-gradient-to-b':'background-image:linear-gradient(to bottom,var(--gradient-from,transparent) var(--gradient-from-position,0%),var(--gradient-via,transparent) var(--gradient-via-position,50%),var(--gradient-to,transparent) var(--gradient-to-position,100%))'
};
const props={w:'width',h:'height','min-w':'min-width','max-w':'max-width','min-h':'min-height','max-h':'max-height',top:'top',left:'left',right:'right',bottom:'bottom',gap:'gap',tracking:'letter-spacing',leading:'line-height',opacity:'opacity',p:'padding',px:['padding-left','padding-right'],py:['padding-top','padding-bottom'],pt:'padding-top',pb:'padding-bottom',pl:'padding-left',pr:'padding-right',m:'margin',mx:['margin-left','margin-right'],my:['margin-top','margin-bottom'],mt:'margin-top',mb:'margin-bottom','rounded':'border-radius','rounded-tl':'border-top-left-radius','rounded-tr':'border-top-right-radius','rounded-bl':'border-bottom-left-radius','rounded-br':'border-bottom-right-radius',shadow:'box-shadow',flex:'flex',size:['width','height'],z:'z-index'};
function fallbacks(s){
 while(s.includes('var(')){
  const start=s.lastIndexOf('var(');let depth=1,end=start+4,comma=-1;
  for(;end<s.length;end++){if(s[end]==='(')depth++;else if(s[end]===')'){depth--;if(!depth)break;}else if(s[end]===','&&depth===1&&comma<0)comma=end;}
  if(comma<0)break;s=s.slice(0,start)+s.slice(comma+1,end)+s.slice(end+1);
 }
 return s;
}
const decode=s=>fallbacks(s.replace(/_/g,' ').replace(/&quot;/g,'"').replace(/&#x27;/g,"'"));
function decl(token){
 if(simple[token])return simple[token];
 let m=token.match(/^\[(.+):(.+)\]$/);if(m)return `${m[1]}:${decode(m[2])}`;
 m=token.match(/^(.+?)-\[(.*)\]$/);
 if(m){let [,key,raw]=m,v=decode(raw);
  if(key==='font')return `font-family:${v}`;
  if(key==='text'){if(v.startsWith('length:'))return `font-size:${v.slice(7)}`;if(v.startsWith('color:'))return `color:${v.slice(6)}`;return (/^(#|rgb)/.test(v)?'color:':'font-size:')+v;}
  if(key==='bg')return `background-color:${v}`;
  if(key==='border')return `border-color:${v}`;
  if(key==='backdrop-blur')return `backdrop-filter:blur(${v});-webkit-backdrop-filter:blur(${v})`;
  if(key==='drop-shadow')return `filter:drop-shadow(${v})`;
  if(key==='grid-cols')return `grid-template-columns:${v}`;
  if(key==='grid-rows')return `grid-template-rows:${v}`;
  if(key==='mask-size')return `mask-size:${v};-webkit-mask-size:${v}`;
  if(['from','via','to'].includes(key))return /^\d/.test(v)?`--gradient-${key}-position:${v}`:`--gradient-${key}:${v}`;
  if(props[key])return [props[key]].flat().map(p=>`${p}:${v}`).join(';');
 }
 m=token.match(/^opacity-(\d+)$/);if(m)return `opacity:${+m[1]/100}`;
 m=token.match(/^leading-(normal|none)$/);if(m)return `line-height:${m[1]==='none'?'1':'normal'}`;
 return null;
}
export function utilities(html){
 const tokens=new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap(m=>m[1].replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').split(/\s+/)).filter(Boolean));
 const unknown=[];
 const css=[...tokens].sort().map(t=>{const d=decl(t);if(!d){if(!t.startsWith('site-')&&!t.startsWith('faq-')&&!['desktop-view','mobile-view','page-view','overlay-view'].includes(t))unknown.push(t);return '';}return '.'+[...t].map(c=>/[a-zA-Z0-9_-]/.test(c)?c:'\\'+c).join('')+'{'+d+'}';}).join('\n');
 if(unknown.length)throw new Error('Classes ainda não convertidas: '+JSON.stringify(unknown));
 return css;
}
