(()=>{
  const dnaStyle=document.createElement('style');
  dnaStyle.textContent=`
    .dna-bg{position:fixed!important;inset:0!important;z-index:4!important;pointer-events:none!important;overflow:hidden!important}
    .firstpage-dna{position:absolute;font-size:clamp(56px,8vw,110px);opacity:.16;filter:drop-shadow(0 0 10px #fff) drop-shadow(0 0 18px #00d9ff) drop-shadow(0 0 20px #ff8a00);animation:firstPageDnaFloat 9s ease-in-out infinite}
    .firstpage-dna.f1{left:3%;top:12%;transform:rotate(-18deg)}.firstpage-dna.f2{right:5%;top:18%;animation-delay:-2s;transform:rotate(20deg)}.firstpage-dna.f3{left:10%;top:62%;animation-delay:-5s;transform:rotate(8deg)}.firstpage-dna.f4{right:9%;top:66%;animation-delay:-7s;transform:rotate(-24deg)}.firstpage-dna.f5{left:46%;top:38%;animation-delay:-3s;opacity:.11}
    @keyframes firstPageDnaFloat{0%,100%{translate:0 0}50%{translate:0 -30px}}
    @keyframes firstPageCursorPop{0%{opacity:1;transform:translate(-50%,-50%) scale(.8) rotate(0deg)}100%{opacity:0;transform:translate(-50%,-50%) scale(1.8) rotate(40deg)}}
    .firstpage-dna-trail{position:fixed;left:0;top:0;z-index:99999;pointer-events:none;font-size:18px;line-height:1;filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 9px #00d9ff) drop-shadow(0 0 10px #ff8a00);animation:firstPageCursorPop .65s ease-out forwards}
    @media(max-width:760px){.firstpage-dna{font-size:clamp(44px,12vw,72px);opacity:.12}}
    @media(prefers-reduced-motion:reduce){.firstpage-dna,.firstpage-dna-trail{animation:none}.firstpage-dna-trail{display:none}}
  `;
  document.head.appendChild(dnaStyle);
  const initFirstPageDNA=()=>{let bg=document.querySelector('.dna-bg');if(!bg){bg=document.createElement('div');bg.className='dna-bg';bg.setAttribute('aria-hidden','true');document.body.prepend(bg)}if(!bg.querySelector('.firstpage-dna')){['f1','f2','f3','f4','f5'].forEach(c=>{const d=document.createElement('span');d.className='firstpage-dna '+c;d.textContent='🧬';bg.appendChild(d)})}};
  if(document.body)initFirstPageDNA();else addEventListener('DOMContentLoaded',initFirstPageDNA,{once:true});
  const restored=document.createElement('script');
  restored.src='https://cdn.jsdelivr.net/gh/Vincentfeliciano11/Cancer-Immunotherapy-Pembrolizumab-@465c5088c078339c3166ef990529d9d939e62590/effects.js';
  restored.onload=()=>{
    const style=document.createElement('style');style.textContent=`
      .microscope-message-wrap,.desktop-microscope-note,.mobile-microscope-note,.page2-microscope-note,.microscope-lens,.microscope-view,.microscope-copy,.microscope-entry,.microscope-entry-graphic,.microscope-entry-label,.scope-prompt,.scope-setup,.scope-card,.mag-options,.mag-btn,.scope-cancel,[class*="microscope-notice"],[class*="scope-notice"]{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}
      body:not(:has(#uvModeBtn)) .nav-inner{display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important;gap:18px!important}
      body:not(:has(#uvModeBtn)) .nav-inner>.brand{grid-column:1!important;justify-self:start!important;max-width:100%!important;min-width:0!important}
      body:not(:has(#uvModeBtn)) .nav-inner>div:last-child{grid-column:3!important;justify-self:end!important;margin-left:0!important;min-width:0!important}
      .uv-switch-wrap{position:static!important;left:auto!important;right:auto!important;top:auto!important;transform:none!important;z-index:18000!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:40px!important;padding:9px 18px!important;border:2px solid #fff!important;border-radius:12px!important;background:linear-gradient(135deg,#7b2cff,#008cff)!important;color:#fff!important;font:900 14px/1 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;box-shadow:0 0 15px #7b2cff99,0 0 15px #00d9ff80!important;white-space:nowrap!important}
      body:not(:has(#uvModeBtn)) .uv-switch-wrap{grid-column:2!important;grid-row:1!important;justify-self:center!important}
      body:has(#uvModeBtn) .uv-switch-wrap{display:none!important}
      .nav-inner{padding:clamp(9px,1.4vw,14px) clamp(12px,2.4vw,24px)!important}.brand{font-size:clamp(12px,1.6vw,17px)!important}.site-address{font-size:clamp(9px,1.05vw,12px)!important}
      @media(max-width:900px){body:not(:has(#uvModeBtn)) .nav-inner{grid-template-columns:minmax(0,1fr) auto!important;grid-template-rows:auto auto!important;row-gap:8px!important;padding-top:8px!important}body:not(:has(#uvModeBtn)) .nav-inner>.brand{grid-column:1!important;grid-row:2!important}body:not(:has(#uvModeBtn)) .nav-inner>div:last-child{grid-column:2!important;grid-row:2!important}body:not(:has(#uvModeBtn)) .uv-switch-wrap{grid-column:1/3!important;grid-row:1!important;justify-self:center!important}.uv-switch-wrap{min-height:36px!important;padding:7px 12px!important;font-size:12px!important}}
      .hero{padding:clamp(100px,12vw,125px) clamp(14px,3vw,24px) clamp(100px,13vw,140px)!important}.hero-inner{gap:clamp(18px,3vw,35px)!important}.hero h1{font-size:clamp(38px,7vw,84px)!important;letter-spacing:clamp(-4px,-.35vw,-1.5px)!important}.hero p{font-size:clamp(15px,1.8vw,18px)!important;line-height:1.65!important}.interactive-wrap,.visual{width:min(700px,100%)!important}.visual{height:clamp(500px,58vw,670px)!important}.panel-main span,.panel-pd1 span{white-space:nowrap!important}.info-card h3{white-space:nowrap!important;max-width:100%!important;padding-right:44px!important}.summary-section{padding:clamp(54px,8vw,90px) clamp(14px,3vw,24px)!important}.summary-card{padding:clamp(25px,5vw,52px)!important}.research-by{padding-left:clamp(14px,3vw,24px)!important;padding-right:clamp(14px,3vw,24px)!important;padding-bottom:clamp(55px,8vw,90px)!important}.panel-antibody > span{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important}.panel-antibody .comic-word{display:block!important;width:100%!important;white-space:nowrap!important;text-align:center!important}
    `;document.head.appendChild(style);
    const nav=document.querySelector('.nav-inner'),uv=document.querySelector('.uv-switch-wrap');if(nav&&uv&&!document.getElementById('uvModeBtn')){const right=nav.children[1];if(right)nav.insertBefore(uv,right);else nav.appendChild(uv)}
    document.body.classList.remove('microscope-active','scope-selecting');document.querySelectorAll('.microscope-message-wrap,.desktop-microscope-note,.mobile-microscope-note,.page2-microscope-note,.microscope-lens,.microscope-view,.microscope-copy,.microscope-entry,.scope-prompt,.scope-setup').forEach(el=>el.remove());
    const antibody=document.querySelector('.panel-antibody > span');if(antibody)antibody.innerHTML='<span class="comic-word">MONOCLONAL</span><span class="comic-word">ANTIBODY</span>';
    initFirstPageDNA();
  };
  restored.onerror=()=>{initFirstPageDNA();console.error('Unable to restore site effects.');};document.head.appendChild(restored);
})();