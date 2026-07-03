const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const safe = (selector, event, callback) => {
  const element = $(selector);
  if (element) element.addEventListener(event, callback);
};

safe('#menuBtn', 'click', () => $('#navLinks')?.classList.toggle('open'));

$$('.nav-links a').forEach(link => {
  link.addEventListener('click', () => $('#navLinks')?.classList.remove('open'));
});

safe('#accessBtn', 'click', () => $('#accessPanel')?.classList.toggle('open'));

safe('#fontPlus', 'click', () => {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
  root.style.setProperty('--font-size', Math.min(current + 1, 23) + 'px');
});

safe('#fontMinus', 'click', () => {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
  root.style.setProperty('--font-size', Math.max(current - 1, 16) + 'px');
});

safe('#contrastToggle', 'click', () => document.body.classList.toggle('contrast'));

safe('#resetAccess', 'click', () => {
  document.documentElement.style.setProperty('--font-size','18px');
  document.body.classList.remove('contrast');
});

$$('[data-video]').forEach(button => {
  button.addEventListener('click', () => {
    const video = button.dataset.video;
    if (video.includes('ID_VIDEO')) {
      alert('Reemplaza ID_VIDEO por el ID real del video de YouTube. Ejemplo: https://www.youtube.com/embed/abc123');
      return;
    }
    $('#videoFrame').src = video;
    $('#videoModal').classList.add('open');
    $('#videoModal').setAttribute('aria-hidden','false');
  });
});

safe('#closeVideo', 'click', () => {
  $('#videoFrame').src = '';
  $('#videoModal').classList.remove('open');
  $('#videoModal').setAttribute('aria-hidden','true');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

$$('.reveal').forEach(element => revealObserver.observe(element));
