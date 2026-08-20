(()=>{
  const previous=document.createElement('script');
  previous.src='https://cdn.jsdelivr.net/gh/Vincentfeliciano11/Cancer-Immunotherapy-Pembrolizumab-@465c5088c078339c3166ef990529d9d939e62590/effects.js';
  previous.onload=()=>{
    const style=document.createElement('style');
    style.textContent=`
      .panel-antibody > span{
        display:flex!important;
        flex-direction:column!important;
        align-items:center!important;
        justify-content:center!important;
        gap:clamp(1px,.4vw,5px)!important;
        width:100%!important;
        max-width:100%!important;
        white-space:normal!important;
        overflow-wrap:normal!important;
        word-break:normal!important;
        hyphens:none!important;
        line-height:1.02!important;
      }
      .panel-antibody .comic-word{
        display:block!important;
        width:100%!important;
        white-space:nowrap!important;
        overflow-wrap:normal!important;
        word-break:keep-all!important;
        hyphens:none!important;
        text-align:center!important;
      }
      @media(max-width:760px){
        .panel-antibody{font-size:clamp(11px,3.15vw,15px)!important;padding-left:5px!important;padding-right:5px!important;letter-spacing:0!important}
      }
      @media(max-width:390px){
        .panel-antibody{font-size:clamp(10px,2.9vw,12px)!important;border-width:4px!important}
      }
    `;
    document.head.appendChild(style);

    const antibody=document.querySelector('.panel-antibody > span');
    if(antibody){
      antibody.innerHTML='<span class="comic-word">MONOCLONAL</span><span class="comic-word">ANTIBODY</span>';
    }
  };
  previous.onerror=()=>console.error('Unable to load previous site effects.');
  document.head.appendChild(previous);
})();