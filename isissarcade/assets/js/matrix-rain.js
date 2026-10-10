/* Matrix rain: decorazione leggera, senza librerie esterne. */
(() => {
  const canvas = document.getElementById('matrixRain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ012345789{}[]<>/=+*;:01';
  let width = 0, height = 0, drops = [], fontSize = 15, frame = 0, raf = 0;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fontSize = width < 600 ? 13 : 15;
    drops = Array.from({length: Math.ceil(width / fontSize)}, () => Math.random() * (height / fontSize));
  }
  function draw() {
    ctx.fillStyle = 'rgba(2, 8, 5, 0.12)'; ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const y = drops[i] * fontSize;
      ctx.fillStyle = Math.random() > .975 ? '#d5ffe1' : (Math.random() > .45 ? '#39ff78' : '#0b9d43');
      ctx.globalAlpha = Math.random() * .5 + .35;
      ctx.fillText(char, i * fontSize, y);
      ctx.globalAlpha = 1;
      if (y > height && Math.random() > .975) drops[i] = 0;
      drops[i] += reduced ? 0 : (Math.random() * .25 + .12);
    }
    if (!reduced) raf = requestAnimationFrame(draw);
  }
  resize();
  ctx.fillStyle = '#020805'; ctx.fillRect(0, 0, width, height);
  if (reduced) { draw(); } else { draw(); }
  window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); draw(); }, {passive:true});
})();
