/**
 * ISISS ARCADE VR — vetrina dei giochi in realtà mista.
 * Legge VR_GAMES da games-data.js e genera le schede.
 * Per aggiungere un gioco VR basta aggiungere una voce in VR_GAMES.
 */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('vrGrid');
  if (!grid) return;

  // Segnala se la pagina è aperta da un visore Quest
  const badge = document.getElementById('deviceBadge');
  if (badge && /OculusBrowser|Quest/i.test(navigator.userAgent || '')) {
    badge.textContent = '● Meta Quest rilevato';
    badge.classList.add('quest');
  }

  if (!Array.isArray(VR_GAMES) || VR_GAMES.length === 0) {
    grid.innerHTML = `
      <div class="vr-empty">
        <div class="vr-empty-icon">🥽</div>
        <strong>Nessun gioco VR disponibile</strong>
        <p>I giochi in realtà mista arriveranno presto.</p>
      </div>`;
    return;
  }

  VR_GAMES.forEach(game => {
    const card = document.createElement('article');
    card.className = 'vr-card';
    card.style.setProperty('--vr-accent', game.accentColor || '#58c7ff');

    card.innerHTML = `
      <div class="vr-card-media">
        <img src="${game.photo}" alt="" loading="lazy">
      </div>
      <div class="vr-card-content">
        <div class="vr-card-icon" aria-hidden="true">${game.icon}</div>
        <h2>${game.title}</h2>
        <p>${game.tagline}</p>
        ${game.detail ? `<p class="vr-card-detail">${game.detail}</p>` : ''}
        <a class="btn-play" href="${game.path}" aria-label="Avvia ${game.title}">
          Avvia il gioco <span aria-hidden="true">→</span>
        </a>
      </div>`;

    grid.appendChild(card);
  });
});
