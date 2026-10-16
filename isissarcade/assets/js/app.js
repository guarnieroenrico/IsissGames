/**
 * ISISS ARCADE - Vetrina Giochi Web & Foto Orientamento
 * Genera automaticamente le schede arcade con le foto dei laboratori/orientamento e i QR Code per smartphone.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Setup Background Slideshow ---
  const bgMosaic = document.getElementById('bgPhotosMosaic');
  if (bgMosaic) {
    const mediaFiles = [
      'bg/foto1.jpg', 'bg/foto2.jpg', 'bg/foto3.jpg', 
      'bg/foto4.jpg', 'bg/foto5.jpg', 'bg/foto6.jpg',
      'bg/video1.mp4', 'bg/video2.mp4'
    ];
    
    // Create DOM elements for media
    const mediaElements = mediaFiles.map(file => {
      let el;
      if (file.endsWith('.mp4')) {
        el = document.createElement('video');
        el.src = file;
        el.muted = true;
        el.loop = true;
        el.playsInline = true;
      } else {
        el = document.createElement('img');
        el.src = file;
      }
      el.className = 'bg-media-item';
      bgMosaic.appendChild(el);
      return el;
    });

    let currentMediaIdx = 0;
    if (mediaElements.length > 0) {
      mediaElements[0].classList.add('active');
      if (mediaElements[0].tagName === 'VIDEO') mediaElements[0].play();
      
      setInterval(() => {
        const prevIdx = currentMediaIdx;
        currentMediaIdx = (currentMediaIdx + 1) % mediaElements.length;
        
        mediaElements[prevIdx].classList.remove('active');
        if (mediaElements[prevIdx].tagName === 'VIDEO') {
          setTimeout(() => mediaElements[prevIdx].pause(), 3000); // pause after fade out
        }
        
        mediaElements[currentMediaIdx].classList.add('active');
        if (mediaElements[currentMediaIdx].tagName === 'VIDEO') {
          mediaElements[currentMediaIdx].play();
        }
      }, 8000); // Change background every 8 seconds
    }
  }

  const qrGrid = document.getElementById('qrGrid');
  if (!qrGrid) return;

  // Calcola l'indirizzo del sito valido sia in locale che online
  const baseUrl = window.location.href
    .split('?')[0]
    .split('#')[0]
    .replace(/\/index\.html$/, '')
    .replace(/\/$/, '');

  // Genera le card arcade
  function renderGames(gamesArray) {
    qrGrid.innerHTML = '';
    
    gamesArray.forEach((game, index) => {
      const fullGameUrl = `${baseUrl}/${game.path}`;

      const card = document.createElement('article');
      card.className = 'qr-card';
      card.style.setProperty('--card-accent', game.accentColor || '#00f0ff');
      
      const actionHtml = `
          <div class="qr-container">
            <div class="qr-corner top-left"></div>
            <div class="qr-corner top-right"></div>
            <div class="qr-corner bottom-left"></div>
            <div class="qr-corner bottom-right"></div>
            
            <div class="qr-box">
              <canvas id="qr-canvas-${index}" width="180" height="180"></canvas>
            </div>
          </div>

          <div class="qr-scan-label">
            <span class="scan-dot"></span>
            <span>INQUADRA PER AVVIARE</span>
          </div>

          <a href="${fullGameUrl}" target="_blank" rel="noopener" class="direct-preview-btn">
            🖥️ Prova su questo dispositivo
          </a>
        `;

      card.innerHTML = `
        <div class="card-visual">
          <img src="${game.photo}" alt="${game.title} - ${game.indirizzo}" class="poster-img" loading="lazy">
          <div class="poster-overlay"></div>
          <div class="card-track-badge">📍 ${game.indirizzo}</div>
          <div class="card-icon-badge">${game.icon}</div>
        </div>

        <div class="card-content">
          <h2 class="qr-card-title">${game.title}</h2>
          <p class="qr-card-tagline">${game.tagline}</p>

          ${actionHtml}
        </div>
      `;

      qrGrid.appendChild(card);

      // Genera il QR Code sul canvas
      const canvasEl = document.getElementById(`qr-canvas-${index}`);
      if (canvasEl && typeof QRious !== 'undefined') {
        new QRious({
          element: canvasEl,
          value: fullGameUrl,
          size: 180,
          level: 'H',
          foreground: '#070913',
          background: '#ffffff'
        });
      }
    });
  }

  // Inizializzazione
  renderGames(ARCADE_GAMES);
});
