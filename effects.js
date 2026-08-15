(()=>{
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css=document.createElement('style');
  css.textContent=`
  @keyframes introPulse{0%,100%{text-shadow:0 0 10px #fff,0 0 28px #00d9ff,0 0 42px #ff8a00;transform:scale(.98)}50%{text-shadow:0 0 18px #fff,0 0 46px #00d9ff,0 0 64px #ff8a00;transform:scale(1.03)}}
  @keyframes introFlash{0%{opacity:0}15%{opacity:.9}24%{opacity:.15