const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const safe = (selector, event, callback) => {
  const element = $(selector);
  if (element) element.addEventListener(event, callback);
};

safe('#menuBtn', 'click', () => $('#navLinks').classList.toggle('open'));

$$('.nav-links a').forEach(link => {
  link.addEventListener('click', () => $('#navLinks')?.classList.remove('open'));
});

safe('#accessBtn', 'click', () => $('#accessPanel').classList.toggle('open'));
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
safe('#darkToggle', 'click', () => document.body.classList.toggle('dark'));
safe('#resetAccess', 'click', () => {
  document.documentElement.style.setProperty('--font-size','18px');
  document.body.classList.remove('contrast','dark');
});

['#preForm', '#postForm'].forEach((formId) => {
  const form = $(formId);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = formId === '#preForm' ? '#preSuccess' : '#postSuccess';
    $(success)?.classList.add('show');
  });
});

$$('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    const video = btn.dataset.video;
    if (video.includes('ID_VIDEO')) {
      alert('Aquí debes reemplazar ID_VIDEO por el enlace embed real del video de YouTube.');
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

const routes = {
  estudiar: {
    title: 'Ruta recomendada para estudiar',
    text: 'Empieza revisando Betowa y SENA. Elige un curso corto, verifica requisitos y agenda un horario semanal de estudio.',
    link: 'https://betowa.sena.edu.co/',
    label: 'Ir a Betowa SENA'
  },
  emprender: {
    title: 'Ruta recomendada para emprender',
    text: 'Define una idea, valida qué sabes hacer bien y revisa recursos de emprendimiento como Fondo Emprender.',
    link: 'https://www.fondoemprender.com/',
    label: 'Ir a Fondo Emprender'
  },
  hobby: {
    title: 'Ruta recomendada para aprender un hobby',
    text: 'Busca cursos gratuitos en Bogotá o formación virtual. Un hobby puede convertirse en bienestar, comunidad o emprendimiento.',
    link: 'https://bogota.gov.co/tag/cursos-gratuitos',
    label: 'Ver cursos gratuitos'
  },
  empleo: {
    title: 'Ruta recomendada para empleo u orientación',
    text: 'Revisa convocatorias, oportunidades laborales y rutas institucionales dirigidas a personas mayores de 50 años.',
    link: 'https://desarrolloeconomico.gov.co/secretaria-de-desarrollo-economico-ofrece-mas-de-400-oportunidades-laborales-162-exclusivas-para-personas-mayores-de-50-anos/',
    label: 'Ver oportunidades'
  }
};

function renderRoute(key) {
  const route = routes[key];
  if (!route || !$('#advisorResult')) return;
  $('#advisorResult').innerHTML = `<h3>${route.title}</h3><p>${route.text}</p><a class="btn primary" target="_blank" rel="noopener" href="${route.link}">${route.label}</a>`;
}

$$('[data-path]').forEach(btn => btn.addEventListener('click', () => renderRoute(btn.dataset.path)));

safe('#chatFab', 'click', () => $('#chatBox').classList.toggle('open'));
safe('#closeChat', 'click', () => $('#chatBox').classList.remove('open'));
$$('[data-chat]').forEach(btn => {
  btn.addEventListener('click', () => {
    const route = routes[btn.dataset.chat];
    $('#chatBody').innerHTML = `<p class="bot"><strong>${route.title}</strong><br>${route.text}</p><a class="btn primary full" target="_blank" rel="noopener" href="${route.link}">${route.label}</a>`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
$$('.reveal').forEach(el => revealObserver.observe(el));

let countersStarted = false;
function animateCounter(el) {
  const target = Number(el.dataset.count || 0);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString('es-CO');
  }, 24);
}
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      $$('[data-count]').forEach(animateCounter);
    }
  });
}, { threshold: 0.35 });
if ($('.metrics-section')) metricObserver.observe($('.metrics-section'));
