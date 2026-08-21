(()=>{
  const style=document.createElement('style');
  style.textContent=`
    /* Only the centered full description is shown. */
    .hover-tip{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}

    /* Keep every comic label completely inside its panel. */
    .comic-panel{overflow:hidden!important;min-width:0!important;padding-left:clamp(6px,2vw,18px)!important;padding-right:clamp(6px,2vw,18px)!important}
    .comic-panel>span{display:block!important;width:100%!important;max-width:100%!important;text-align:center!important;white-space:normal!important;overflow:visible!important;word-break:normal!important;overflow-wrap:normal!important;hyphens:none!important;line-height:1.05!important}
    .panel-pd1{font-size:clamp(22px,5vw,44px)!important}
    .panel-evasion{font-size:clamp(16px,4.2vw,35px)!important}
    .panel-main{font-size:clamp(17px,4.5vw,43px)!important}
    .panel-antibody{font-size:clamp(12px,3.4vw,29px)!important}
    .panel-checkpoint{font-size:clamp(13px,3.6vw,29px)!important}
    .panel-main>span{width:auto!important;max-width:94%!important;padding:clamp(8px,2.2vw,18px) clamp(8px,2.8vw,24px)!important;white-space:normal!important}

    /* Full description always stays centered in the viewport. */
    .info-card{
      position:fixed!important;left:50%!important;top:50%!important;right:auto!important;bottom:auto!important;
      transform:translate(-50%,-50%) scale(.96)!important;
      width:min(680px,calc(100vw - 32px))!important;
      max-width:calc(100vw - 32px)!important;
      max-height:min(84vh,84dvh)!important;
      overflow-y:auto!important;overflow-x:hidden!important;
      overscroll-behavior:contain!important;
      padding:clamp(24px,4vw,38px)!important;
      padding-top:clamp(54px,7vw,64px)!important;
    }
    .info-card.open{transform:translate(-50%,-50%) scale(1)!important}
    .info-card h3{
      display:block!important;width:100%!important;max-width:100%!important;
      margin:0 0 16px!important;padding:0!important;
      font-size:clamp(22px,5.6vw,38px)!important;line-height:1.08!important;
      white-space:normal!important;word-break:normal!important;overflow-wrap:normal!important;hyphens:none!important;
      text-align:center!important;
    }
    .info-card p{
      display:block!important;width:100%!important;max-width:100%!important;
      margin:0!important;padding:0!important;
      font-size:clamp(15px,3.8vw,18px)!important;line-height:1.58!important;
      white-space:normal!important;word-break:normal!important;overflow-wrap:break-word!important;hyphens:none!important;
      text-align:left!important;
    }
    .info-tag{display:block!important;width:max-content!important;max-width:calc(100% - 56px)!important;margin:0 auto 14px!important;text-align:center!important;white-space:normal!important}
    .close-info{position:absolute!important;right:10px!important;top:10px!important;z-index:4!important;flex:0 0 auto!important}

    @media(max-width:700px){
      .info-card{width:calc(100vw - 22px)!important;max-width:calc(100vw - 22px)!important;max-height:min(78vh,78dvh)!important;border-width:5px!important;padding:58px 18px 22px!important}
      .info-card h3{font-size:clamp(21px,7vw,30px)!important}
      .info-card p{font-size:clamp(14px,4.2vw,16px)!important;line-height:1.55!important}
      .info-tag{font-size:11px!important;max-width:calc(100% - 50px)!important}
      .close-info{width:36px!important;height:36px!important;font-size:20px!important;border-width:3px!important}
      .comic-panel{padding-left:5px!important;padding-right:5px!important}
      .panel-pd1{font-size:clamp(20px,7vw,28px)!important}
      .panel-evasion{font-size:clamp(14px,5.5vw,21px)!important}
      .panel-main{font-size:clamp(15px,5.7vw,23px)!important}
      .panel-antibody{font-size:clamp(11px,4.3vw,17px)!important}
      .panel-checkpoint{font-size:clamp(11px,4.5vw,18px)!important}
    }
    @media(max-width:390px){
      .info-card{width:calc(100vw - 14px)!important;max-width:calc(100vw - 14px)!important;padding-left:14px!important;padding-right:14px!important}
      .info-card h3{font-size:clamp(19px,7.3vw,27px)!important}
      .info-card p{font-size:14px!important}
    }
  `;
  document.head.appendChild(style);

  const tip=document.getElementById('hoverTip');
  if(tip){tip.classList.remove('show');tip.setAttribute('aria-hidden','true');}

  const card=document.getElementById('infoCard');
  if(card){
    card.setAttribute('role','dialog');
    card.setAttribute('aria-modal','true');
    card.setAttribute('aria-labelledby','infoTitle');
  }

  /* Prevent any legacy preview from reappearing after taps/focus. */
  document.querySelectorAll('.comic-panel').forEach(panel=>{
    ['mouseenter','mouseleave','focus','blur','touchstart'].forEach(evt=>{
      panel.addEventListener(evt,()=>{if(tip)tip.classList.remove('show')},{capture:true});
    });
  });
})();