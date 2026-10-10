/**
 * ISISS ARCADE VR — modulo comune A-Frame (Realtà Aumentata / passthrough Meta Quest)
 *
 * Convenzione di coordinate: l'entità #world è posta sul pavimento, nel punto in cui
 * si trova il giocatore quando entra in AR, ruotata nella direzione in cui guarda.
 * Dentro #world: il giocatore è all'origine e "davanti a lui" è l'asse -Z, y = 0 è il pavimento.
 */
(function () {
  const THREE = AFRAME.THREE;
  const Arc = (window.Arc = {});
  Arc.inXR = false;
  Arc.preview = false;
  const startCbs = [], triggerCbs = [], recenterCbs = [];

  /* ---------- Audio ---------- */
  let actx = null;
  Arc.beep = function (freq, dur, type, vol, slideTo) {
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t);
      if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
      g.gain.setValueAtTime(vol || 0.15, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + dur);
    } catch (e) { /* audio non disponibile */ }
  };

  /* ---------- Utility ---------- */
  Arc.rand = (a, b) => a + Math.random() * (b - a);
  Arc.cast = function (obj) {
    obj.traverse(o => { if (o.isMesh) o.castShadow = true; });
    return obj;
  };
  Arc.haptic = function (hand, strength, ms) {
    try {
      const el = Arc.hands[hand];
      const gp = el.components['tracked-controls'].controller.gamepad;
      gp.hapticActuators[0].pulse(strength || 0.5, ms || 40);
    } catch (e) { /* nessun feedback aptico */ }
  };
  Arc.toLocal = function (v) { return Arc.world.object3D.worldToLocal(v); };
  Arc.dirToLocal = function (d) {
    const q = new THREE.Quaternion();
    Arc.world.object3D.getWorldQuaternion(q);
    return d.applyQuaternion(q.invert());
  };
  /** posizione della testa nello spazio di #world */
  Arc.headLocal = function () {
    const v = new THREE.Vector3();
    Arc.scene.camera.getWorldPosition(v);
    return Arc.toLocal(v);
  };
  /** Raggio di un controller (hand = 'left' | 'right') nello spazio di #world */
  Arc.handRay = function (hand) {
    const el = Arc.hands[hand];
    const o = new THREE.Vector3(), d = new THREE.Vector3(0, 0, -1);
    const rc = el.components.raycaster;
    if (rc && rc.raycaster) { o.copy(rc.raycaster.ray.origin); d.copy(rc.raycaster.ray.direction); }
    else { el.object3D.getWorldPosition(o); const q = new THREE.Quaternion(); el.object3D.getWorldQuaternion(q); d.applyQuaternion(q); }
    return { origin: Arc.toLocal(o), dir: Arc.dirToLocal(d).normalize() };
  };
  Arc.handPos = function (hand) {
    const v = new THREE.Vector3();
    Arc.hands[hand].object3D.getWorldPosition(v);
    return Arc.toLocal(v);
  };
  Arc.camRay = function (clientX, clientY) {
    const r = Arc.scene.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const rc = new THREE.Raycaster(); rc.setFromCamera(ndc, Arc.scene.camera);
    return { origin: Arc.toLocal(rc.ray.origin.clone()), dir: Arc.dirToLocal(rc.ray.direction.clone()).normalize() };
  };

  /* ---------- Eventi di gioco ---------- */
  Arc.onStart = fn => startCbs.push(fn);
  Arc.onRecenter = fn => recenterCbs.push(fn);
  /** fn(ray, source) — source: 'left' | 'right' | 'mouse'. Chiamato su trigger / click. */
  Arc.onTrigger = fn => triggerCbs.push(fn);
  Arc.onTriggerUp = null;

  Arc.recenter = function () {
    if (!Arc.inXR) return;
    const cam = Arc.scene.camera, p = new THREE.Vector3(), d = new THREE.Vector3();
    cam.getWorldPosition(p); cam.getWorldDirection(d);
    Arc.world.object3D.position.set(p.x, 0, p.z);
    Arc.world.object3D.rotation.set(0, Math.atan2(-d.x, -d.z), 0);
    recenterCbs.forEach(f => f());
  };

  AFRAME.registerComponent('arc-world', {
    init() {
      Arc.world = this.el;
      const scene = Arc.scene = this.el.sceneEl;
      const setPreviewOnly = show => document.querySelectorAll('.preview-only').forEach(e => e.setAttribute('visible', show));
      let started = false;
      const begin = () => { if (started) return; started = true; startCbs.forEach(f => f()); };

      scene.addEventListener('enter-vr', () => {
        Arc.inXR = true; Arc.preview = false; setPreviewOnly(false);
        document.getElementById('arc-overlay').style.display = 'none';
        setTimeout(() => { Arc.recenter(); begin(); }, 800);
      });
      scene.addEventListener('exit-vr', () => {
        Arc.inXR = false; document.getElementById('arc-overlay').style.display = 'flex';
      });
      Arc.startPreview = () => {
        Arc.preview = true; Arc.inXR = false;
        document.getElementById('arc-overlay').style.display = 'none';
        begin();
      };
      // A / X = riposiziona il gioco davanti a te
      ['abuttondown', 'xbuttondown'].forEach(ev => scene.addEventListener(ev, () => Arc.recenter()));
      scene.addEventListener('loaded', () => {
        Arc.hands = { left: document.getElementById('lc'), right: document.getElementById('rc') };
        ['left', 'right'].forEach(h => {
          Arc.hands[h].addEventListener('triggerdown', () => {
            if (!Arc.inXR) return;
            const r = Arc.handRay(h); triggerCbs.forEach(f => f(r, h));
          });
          Arc.hands[h].addEventListener('triggerup', () => { if (Arc.onTriggerUp) Arc.onTriggerUp(h); });
        });
        scene.canvas.addEventListener('mousedown', e => {
          if (Arc.inXR || !Arc.preview) return;
          const r = Arc.camRay(e.clientX, e.clientY); triggerCbs.forEach(f => f(r, 'mouse'));
        });
        scene.canvas.addEventListener('mouseup', () => { if (Arc.onTriggerUp) Arc.onTriggerUp('mouse'); });
      });
    }
  });

  /* ---------- Schermata iniziale ---------- */
  Arc.initOverlay = function (cfg) {
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', () => Arc.initOverlay(cfg)); return; }
    const ov = document.createElement('div');
    ov.id = 'arc-overlay';
    ov.innerHTML = `
      <div class="arc-box">
        <div class="arc-kicker">ISISS MATESE · ARCADE VR</div>
        <h1>${cfg.title}</h1>
        <p class="arc-sub">${cfg.subtitle || ''}</p>
        <ul>${(cfg.howto || []).map(t => `<li>${t}</li>`).join('')}</ul>
        <button id="arc-enter" class="arc-btn" disabled>Controllo del visore…</button>
        <button id="arc-preview" class="arc-btn arc-ghost">Anteprima 2D (senza visore)</button>
        <a class="arc-back" href="../../index.html?pc">← Torna alla vetrina</a>
        <p class="arc-note" id="arc-note">Consiglio: libera un po' di spazio attorno a te e controlla che la stanza sia ben illuminata.</p>
      </div>`;
    const st = document.createElement('style');
    st.textContent = `
      #arc-overlay{position:fixed;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;background:rgba(6,12,24,.78);font-family:Manrope,system-ui,sans-serif;color:#e8f1ff;padding:16px}
      .arc-box{max-width:560px;width:100%;background:#0c1830;border:1px solid #2a4a7a;border-radius:20px;padding:26px;box-shadow:0 20px 60px rgba(0,0,0,.6);text-align:center}
      .arc-kicker{font-size:12px;letter-spacing:.18em;color:#55c8ff;font-weight:700}
      .arc-box h1{margin:8px 0 4px;font-size:30px;font-family:'Space Grotesk',system-ui,sans-serif}
      .arc-sub{margin:0 0 14px;color:#9db4d6}
      .arc-box ul{text-align:left;margin:0 0 18px;padding-left:20px;line-height:1.55;color:#cfe0f8;font-size:15px}
      .arc-btn{display:block;width:100%;padding:16px;margin:8px 0;border:0;border-radius:14px;font-size:18px;font-weight:800;cursor:pointer;background:linear-gradient(90deg,#22c55e,#00d4ff);color:#04101f}
      .arc-btn:disabled{opacity:.5;cursor:default}
      .arc-ghost{background:transparent;color:#9db4d6;border:1px solid #2a4a7a;font-size:15px;font-weight:600;padding:12px}
      .arc-back{display:inline-block;margin-top:8px;color:#55c8ff;text-decoration:none;font-size:14px}
      .arc-note{font-size:12px;color:#7c93b6;margin:10px 0 0}`;
    document.head.append(st); document.body.append(ov);

    const enterBtn = ov.querySelector('#arc-enter'), note = ov.querySelector('#arc-note');
    const unlockAudio = () => Arc.beep(1, 0.01, 'sine', 0.0001);
    ov.querySelector('#arc-preview').onclick = () => { unlockAudio(); Arc.startPreview(); };
    enterBtn.onclick = () => { unlockAudio(); Arc.scene.enterAR(); };
    const ready = () => {
      if (navigator.xr && navigator.xr.isSessionSupported) {
        navigator.xr.isSessionSupported('immersive-ar').then(ok => {
          enterBtn.disabled = !ok;
          enterBtn.textContent = ok ? '🥽 ENTRA IN REALTÀ AUMENTATA' : 'AR non disponibile su questo dispositivo';
          if (!ok) note.textContent = 'Apri questa pagina dal browser del Meta Quest (Quest 2/3/Pro) con il passthrough attivo. Qui puoi solo provare l\'anteprima 2D.';
        }).catch(() => { enterBtn.textContent = 'AR non disponibile'; });
      } else {
        enterBtn.textContent = 'WebXR non supportato da questo browser';
        note.textContent = 'Apri la pagina dal browser del Meta Quest. Qui puoi provare l\'anteprima 2D.';
      }
    };
    ready();
  };
})();
