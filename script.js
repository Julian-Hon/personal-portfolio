const projects = [
  { title: 'TechHub Superapp', description: 'An internal order-management platform built for seven TechHub staff members to process picking, QA, fulfillment, and delivery workflows. The project includes Microsoft Entra identity and access management, automated partial-order workflows, and a native Python picklist-printing agent.' },
  { title: 'HTeaML', description: 'A full-stack self-ordering application built with EJS, JavaScript, Express.js, Node.js, PostgreSQL, and Google OAuth. It supports customer and employee-assisted purchases, role-based dashboards, translation, voice ordering, weather, and accessibility features.' },
  { title: 'Sustainable Architect', description: 'A TypeScript and Node.js application that evaluates building sustainability from architectural dimensions, materials, and design constraints. It uses a domain-specific Gemini Gem with GSA and AIA guidance to produce standards-based ratings and recommendations.' },
  { title: 'ESP32 Music Display', description: 'An ESP32-powered display that shows the currently playing album art, song title, artist, and album.' }
];
const dialog = document.querySelector('#project-dialog');
if (dialog) {
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[Number(button.dataset.project)];
      document.querySelector('#dialog-title').textContent = project.title;
      document.querySelector('#dialog-description').textContent = project.description;
      dialog.showModal();
    });
  });
  document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();

const paletteToggle = document.querySelector('#palette-toggle');
try {
  if (localStorage.getItem('portfolio-palette') === 'dark') document.body.classList.add('dark-mode');
} catch (_) { /* The preview still works if storage is unavailable. */ }

function updatePaletteButton() {
  if (!paletteToggle) return;
  const dark = document.body.classList.contains('dark-mode');
  paletteToggle.innerHTML = `${dark ? 'Light' : 'Dark'} mode <span aria-hidden="true">◐</span>`;
  paletteToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} palette`);
}

updatePaletteButton();
paletteToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updatePaletteButton();
  try { localStorage.setItem('portfolio-palette', document.body.classList.contains('dark-mode') ? 'dark' : 'light'); } catch (_) { /* Optional preference. */ }
});

const motionPanel = document.querySelector('.motion-panel');
if (motionPanel) {
  const modeButtons = [...document.querySelectorAll('[data-mode]')];
  const word = document.querySelector('#motion-word');
  const caption = document.querySelector('#motion-caption');
  const canvas = document.querySelector('#signal-canvas');
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phrases = ['BUILD / TEST / REPEAT', 'FROM CODE TO CIRCUIT', 'DESIGN FOR THE DETAILS', 'MAKE IT WORK BETTER'];
  let phraseIndex = 0;
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawWave(time) {
    ctx.clearRect(0, 0, width, height);
    const ink = getComputedStyle(document.body).getPropertyValue('--ink').trim();
    const baseline = height / 2;
    const moving = !reducedMotion.matches && motionPanel.dataset.motionMode === 'wave';
    const pulse = moving ? (((time / 5600 + .5) % 1) * (width + 280) - 140) : width / 2;

    ctx.strokeStyle = ink;
    ctx.globalAlpha = .2;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, baseline);
    ctx.lineTo(width, baseline);
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 2) {
      const distance = x - pulse;
      const envelope = Math.exp(-Math.pow(distance / 135, 2));
      const y = baseline + Math.sin(distance * .105 - time * .009) * envelope * 31
        + Math.sin(distance * .047 + time * .004) * envelope * 10;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    if (!reducedMotion.matches) requestAnimationFrame(drawWave);
  }

  modeButtons.forEach(button => button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    motionPanel.dataset.motionMode = mode;
    modeButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    caption.textContent = mode === 'disc' ? 'A COLLECTION ALWAYS IN MOTION' : 'A SIGNAL MOVING THROUGH THE SYSTEM';
  }));

  if (!reducedMotion.matches) {
    setInterval(() => {
      word.classList.add('is-changing');
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        word.textContent = phrases[phraseIndex];
        word.classList.remove('is-changing');
      }, 260);
    }, 5100);
  }

  new ResizeObserver(resizeCanvas).observe(canvas);
  resizeCanvas();
  requestAnimationFrame(drawWave);
}
