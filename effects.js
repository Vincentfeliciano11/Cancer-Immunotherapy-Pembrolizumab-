(()=>{
  const restored=document.createElement('script');
  restored.src='https://cdn.jsdelivr.net/gh/Vincentfeliciano11/Cancer-Immunotherapy-Pembrolizumab-@465c5088c078339c3166ef990529d9d939e62590/effects.js';
  restored.onload=()=>{
    const style=document.createElement('style');
    style.textContent=`
      /* Microscope removed everywhere while preserving all other shared effects. */
      .microscope-message-wrap,.desktop-microscope-note,.mobile-microscope-note,.page2-microscope-note,
      .microscope-lens,.microscope-view,.microscope-copy,.microscope-entry,.microscope-entry-graphic,.microscope-entry-label,
      .scope-prompt,.scope-setup,.scope-card,.mag-options,.mag-btn,.scope-cancel,
      [class*="microscope-notice"],[class*="scope-notice"]{
        display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important
      }

      /* Preserve responsive viewport/split-screen behavior. */
      .nav-inner{padding:clamp(9px,1.4vw,14px) clamp(12px,2.4vw,24px)!important;gap:clamp(8px,2vw,20px)!important}
      .brand{font-size:clamp(12px,1.6vw,17px)!important}.site-address{font-size:clamp(9px,1.05vw,12px)!important}
      .hero{padding:clamp(100px,12vw,125px) clamp(14px,3vw,24px) clamp(100px,13vw,140px)!important}
      .hero-inner{gap:clamp(18px,3vw,35px)!important}.hero h1{font-size:clamp(38px,7vw,84px)!important;letter-spacing:clamp(-4px,-.35vw,-1.5px)!important}
      .hero p{font-size:clamp(15px,1.8vw,18px)!important;line-height:1.65!important}.eyebrow{font-size:clamp(10px,1vw,12px)!important;padding:clamp(5px,.7vw,7px) clamp(9px,1vw,13px)!important}
      .interactive-wrap,.visual{width:min(700px,100%)!important}.visual{height:clamp(500px,58vw,670px)!important;gap:clamp(8px,1.5vw,16px)!important;padding:clamp(8px,1.5vw,16px)!important}
      .comic-panel{padding:clamp(12px,2vw,26px) clamp(9px,1.6vw,18px)!important;border-width:clamp(5px,.75vw,8px)!important;letter-spacing:clamp(.2px,.08vw,.8px)!important}
      .summary-section{padding:clamp(54px,8vw,90px) clamp(14px,3vw,24px)!important}.summary-card{padding:clamp(25px,5vw,52px)!important;border-radius:clamp(18px,3vw,30px)!important}
      .summary-card h2{font-size:clamp(28px,4.5vw,48px)!important}.summary-card p{font-size:clamp(15px,1.8vw,17px)!important;line-height:clamp(1.65,1.9vw,1.95)!important}
      .research-by{padding-left:clamp(14px,3vw,24px)!important;padding-right:clamp(14px,3vw,24px)!important;padding-bottom:clamp(55px,8vw,90px)!important}
      .research-grid{gap:clamp(16px,3vw,34px)!important}.research-person{padding:clamp(16px,2.5vw,24px)!important}.research-person h3{font-size:clamp(17px,2vw,21px)!important}.institution{font-size:clamp(12px,1.4vw,14px)!important}
      .bottom-band,footer{padding-left:clamp(14px,3vw,24px)!important;padding-right:clamp(14px,3vw,24px)!important;font-size:clamp(12px,1.4vw,14px)!important}
      .paper-button{padding-left:clamp(15px,2.2vw,25px)!important;padding-right:clamp(15px,2.2vw,25px)!important;font-size:clamp(13px,1.5vw,16px)!important}
      .molecule-link,.bottom-bible-verse .hero-verse{font-size:clamp(15px,2vw,22px)!important}

      /* Keep Monoclonal Antibody clean on narrow screens. */
      .panel-antibody > span{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:clamp(1px,.4vw,5px)!important;width:100%!important;max-width:100%!important;white-space:normal!important;overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important;line-height:1.02!important}
      .panel-antibody .comic-word{display:block!important;width:100%!important;white-space:nowrap!important;overflow-wrap:normal!important;word-break:keep-all!important;hyphens:none!important;text-align:center!important}

      @media(max-width:1180px){.hero-inner{grid-template-columns:1fr 1.15fr!important}.hero h1{font-size:clamp(40px,6.2vw,68px)!important}.visual{height:clamp(500px,54vw,620px)!important}}
      @media(max-width:950px){.hero-inner{grid-template-columns:1fr!important}.hero{text-align:center!important}.hero h1,.hero p{margin-left:auto!important;margin-right:auto!important}.interactive-wrap{margin-top:8px!important}.visual{height:clamp(500px,78vw,650px)!important}.research-grid{grid-template-columns:1fr 1fr!important}.site-address{display:none!important}}
      @media(max-width:760px){.nav-inner{align-items:center!important}.brand{max-width:72vw!important;line-height:1.15!important}.hero{padding-top:105px!important}.hero h1{font-size:clamp(34px,11vw,54px)!important}.hero p{font-size:clamp(14px,4vw,17px)!important}.visual{height:clamp(470px,112vw,620px)!important}.research-grid{grid-template-columns:1fr!important}.summary-card{padding:clamp(22px,6vw,34px)!important}.paper-button{width:min(100%,420px)!important}.bottom-bible-verse{padding-left:8px!important;padding-right:8px!important}.panel-antibody{font-size:clamp(11px,3.15vw,15px)!important;padding-left:5px!important;padding-right:5px!important;letter-spacing:0!important}}
      @media(max-width:520px){.nav-inner{padding-left:10px!important;padding-right:10px!important}.brand{font-size:clamp(11px,3.4vw,14px)!important}.hero{padding-left:12px!important;padding-right:12px!important}.visual{gap:7px!important;padding:7px!important;height:clamp(450px,122vw,560px)!important}.comic-panel{border-width:5px!important}.summary-section,.research-by{padding-left:12px!important;padding-right:12px!important}.summary-card{border-radius:20px!important}.research-person{border-radius:18px!important}}
      @media(max-width:390px){.panel-antibody{font-size:clamp(10px,2.9vw,12px)!important;border-width:4px!important}}
    `;
    document.head.appendChild(style);

    document.body.classList.remove('microscope-active','scope-selecting');
    document.querySelectorAll('.microscope-message-wrap,.desktop-microscope-note,.mobile-microscope-note,.page2-microscope-note,.microscope-lens,.microscope-view,.microscope-copy,.microscope-entry,.scope-prompt,.scope-setup').forEach(el=>el.remove());

    const antibody=document.querySelector('.panel-antibody > span');
    if(antibody)antibody.innerHTML='<span class="comic-word">MONOCLONAL</span><span class="comic-word">ANTIBODY</span>';
  };
  restored.onerror=()=>console.error('Unable to restore site effects.');
  document.head.appendChild(restored);
})();