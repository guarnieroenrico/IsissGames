
(function(){
  const scene=document.querySelector('#scene'), world=document.querySelector('#world'), reticle=document.querySelector('#floorReticle');
  const enter=document.querySelector('#enter'), restart=document.querySelector('#restart'), start=document.querySelector('#start'), result=document.querySelector('#result'), error=document.querySelector('#error'), help=document.querySelector('#help');
  const scoreEl=document.querySelector('#score'), comboEl=document.querySelector('#combo'), timeEl=document.querySelector('#time'), recordEl=document.querySelector('#record');
  const finalScore=document.querySelector('#finalScore'), finalHits=document.querySelector('#finalHits'), finalCombo=document.querySelector('#finalCombo'), finalMessage=document.querySelector('#finalMessage');
  const rightHand=document.querySelector('#rightHand'), leftHand=document.querySelector('#leftHand');

  let session=null, hitTestSource=null, viewerSpace=null, refSpace=null, calibrationPose=null, floorY=null;
  let calibrated=false, gameStarted=false, gameOver=false, targets=[];
  let score=0,hits=0,combo=1,bestCombo=1,timeLeft=60,record=Number(localStorage.getItem('isiss_space_record')||0),timer=null,spawnTimer=null;
  const maxTargets=5;
  recordEl.textContent=record;

  function setHelp(text){help.textContent=text;}
  function updateHud(){scoreEl.textContent=score;comboEl.textContent='x'+combo;timeEl.textContent=Math.max(0,timeLeft);recordEl.textContent=record;}

  function randomTarget(){
    const angle=Math.random()*Math.PI*2;
    const radius=1.4+Math.random()*2.3;
    const x=Math.cos(angle)*radius;
    const z=-1.6-Math.sin(angle)*radius;
    const y=0.45+Math.random()*1.5;
    return {x,y,z};
  }

  function makeTarget(pos){
    const t=document.createElement('a-entity');
    t.classList.add('target');
    t.setAttribute('position',`${pos.x} ${floorY+pos.y} ${pos.z}`);
    t.setAttribute('geometry','primitive:sphere;radius:.17');
    t.setAttribute('material','color:#ff5f6d;emissive:#ff2638;emissiveIntensity:1.25;metalness:.25;roughness:.18');
    t.setAttribute('animation__pulse','property:scale;from:0.82 0.82 0.82;to:1.08 1.08 1.08;dir:alternate;loop:true;dur:700;easing:easeInOutSine');
    t.dataset.created=String(Date.now());
    t.addEventListener('mouseenter',()=>t.setAttribute('material','color:#ffe66d;emissive:#ffb800;emissiveIntensity:1.5'));
    t.addEventListener('mouseleave',()=>{if(!t.dataset.hit)t.setAttribute('material','color:#ff5f6d;emissive:#ff2638;emissiveIntensity:1.25')});
    world.appendChild(t);targets.push(t);
    return t;
  }

  function spawnTarget(){
    if(!gameStarted||gameOver||targets.length>=Math.min(maxTargets,2+Math.floor((60-timeLeft)/15))) return;
    makeTarget(randomTarget());
  }

  function fillTargets(){
    const desired=Math.min(maxTargets,2+Math.floor((60-timeLeft)/15));
    while(targets.length<desired)spawnTarget();
  }

  function removeTarget(t){
    const i=targets.indexOf(t); if(i>=0)targets.splice(i,1); t.remove();
  }

  function hit(t){
    if(!gameStarted||gameOver||!t||t.dataset.hit)return false;
    t.dataset.hit='1'; hits++;
    const multiplier=combo;
    score+=100*multiplier;
    combo=Math.min(8,combo+1); bestCombo=Math.max(bestCombo,combo);
    updateHud();
    try{t.setAttribute('animation__hit','property:scale;to:0.01 0.01 0.01;dur:130;easing:easeInQuad');}catch(e){}
    setTimeout(()=>removeTarget(t),140);
    if(navigator.vibrate)try{navigator.vibrate(20)}catch(e){}
    return true;
  }

  function miss(){
    if(!gameStarted||gameOver)return;
    combo=1; updateHud(); setHelp('Colpo a vuoto — mira al bersaglio e prova ancora.');
  }

  function shootFromHand(hand){
    if(!session)return;
    if(!calibrated){calibrateFloor();return;}
    const raycaster=hand&&hand.components&&hand.components.raycaster;
    const hitsList=raycaster ? (raycaster.intersectedEls||[]) : [];
    const target=hitsList.find(el=>el.classList&&el.classList.contains('target')&&!el.dataset.hit);
    if(target)hit(target); else miss();
  }

  function onXRSelect(event){
    if(!session)return;
    if(!calibrated){calibrateFloor();return;}
    const handed=event.inputSource&&event.inputSource.handedness;
    const hand=handed==='left'?leftHand:rightHand;
    // Il raycaster A-Frame viene aggiornato durante il frame XR; qui usiamo lo stesso percorso dello sparo.
    shootFromHand(hand);
  }

  function isFloorHit(pose){
    const q=pose.transform.orientation;
    const quat=new THREE.Quaternion(q.x,q.y,q.z,q.w);
    const normal=new THREE.Vector3(0,1,0).applyQuaternion(quat);
    return normal.y>0.65;
  }

  function setReticle(pose){
    const p=pose.transform.position; reticle.object3D.position.set(p.x,p.y+0.012,p.z); reticle.setAttribute('visible','true');
  }

  function calibrateFloor(){
    if(!session||calibrated)return;
    if(!calibrationPose){setHelp('Guarda il pavimento finché compare l’anello bianco.');return;}
    floorY=calibrationPose.transform.position.y; calibrated=true; reticle.setAttribute('visible','false'); startGame();
  }

  function startGame(){
    if(gameStarted)return;
    gameStarted=true;gameOver=false;score=0;hits=0;combo=1;bestCombo=1;timeLeft=60;targets.forEach(t=>t.remove());targets=[];updateHud();
    setHelp('VIA! Distruggi i bersagli. I colpi consecutivi aumentano la combo.');
    fillTargets();
    timer=setInterval(()=>{timeLeft--;updateHud();if(timeLeft<=0)endGame();},1000);
    spawnTimer=setInterval(()=>{fillTargets();},800);
  }

  function endGame(){
    if(gameOver)return;gameOver=true;gameStarted=false;
    clearInterval(timer);clearInterval(spawnTimer);timer=null;spawnTimer=null;
    targets.forEach(t=>t.remove());targets=[];
    if(score>record){record=score;localStorage.setItem('isiss_space_record',String(record));}
    finalScore.textContent=score;finalHits.textContent=hits;finalCombo.textContent='x'+Math.max(1,bestCombo);
    finalMessage.textContent=score>=3000?'Ottimo lavoro! Hai una mira notevole.':score>=1500?'Bella partita! Prova a spingere la combo ancora più in alto.':'Buon inizio: prova a colpire più bersagli consecutivamente.';
    result.style.display='grid';updateHud();
  }

  function resetForSession(){
    calibrated=false;gameStarted=false;gameOver=false;floorY=null;calibrationPose=null;targets.forEach(t=>t.remove());targets=[];
    clearInterval(timer);clearInterval(spawnTimer);timer=null;spawnTimer=null;timeLeft=60;score=0;combo=1;hits=0;updateHud();reticle.setAttribute('visible','false');result.style.display='none';
  }

  async function setupHitTest(s){
    try{refSpace=await s.requestReferenceSpace('local-floor');viewerSpace=await s.requestReferenceSpace('viewer');hitTestSource=await s.requestHitTestSource({space:viewerSpace});}
    catch(e){hitTestSource=null;setHelp('Il rilevamento del pavimento non è disponibile su questo browser/visore.');}
  }

  function renderXR(time,frame){
    if(session&&frame&&hitTestSource&&!calibrated){
      const results=frame.getHitTestResults(hitTestSource);calibrationPose=null;
      for(const r of results){const pose=r.getPose(refSpace);if(pose&&isFloorHit(pose)){calibrationPose=pose;setReticle(pose);break;}}
    }
    if(session)session.requestAnimationFrame(renderXR);
  }

  async function startAR(){
    error.style.display='none';
    if(!navigator.xr){error.textContent='WebXR non disponibile. Usa il browser del visore e HTTPS.';error.style.display='block';return;}
    try{
      if(!(await navigator.xr.isSessionSupported('immersive-ar')))throw new Error('La modalità Mixed Reality immersive-ar non è supportata da questo visore/browser.');
      resetForSession();
      session=await navigator.xr.requestSession('immersive-ar',{requiredFeatures:['local-floor'],optionalFeatures:['hit-test','bounded-floor']});
      scene.renderer.xr.setSession(session);start.style.display='none';result.style.display='none';setHelp('Guarda il pavimento. Quando compare l’anello, premi il grilletto per calibrare.');
      session.addEventListener('select',onXRSelect);
      session.addEventListener('end',()=>{session=null;hitTestSource=null;viewerSpace=null;refSpace=null;resetForSession();start.style.display='grid';setHelp('Guarda il pavimento. Quando compare l’anello, premi il grilletto per calibrare.');});
      await setupHitTest(session);session.requestAnimationFrame(renderXR);
    }catch(e){error.textContent=e.message||'Impossibile avviare la modalità AR.';error.style.display='block';}
  }

  enter.addEventListener('click',startAR);restart.addEventListener('click',()=>{result.style.display='none';if(session){resetForSession();setHelp('Guarda il pavimento. Quando compare l’anello, premi il grilletto per calibrare.');}else startAR();});
  rightHand.addEventListener('triggerdown',()=>shootFromHand(rightHand));leftHand.addEventListener('triggerdown',()=>shootFromHand(leftHand));
})();
