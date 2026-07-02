const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const menuBtn = $('#menuBtn');
const navLinks = $('#navLinks');
if (menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

$('#accessBtn').addEventListener('click', () => $('#accessPanel').classList.toggle('open'));
$('#fontPlus').addEventListener('click', () => {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
  root.style.setProperty('--font-size', Math.min(current + 1, 24) + 'px');
});
$('#contrastToggle').addEventListener('click', () => document.body.classList.toggle('contrast'));
$('#darkToggle').addEventListener('click', () => document.body.classList.toggle('dark'));
$('#resetAccess').addEventListener('click', () => {
  document.documentElement.style.setProperty('--font-size','18px');
  document.body.classList.remove('contrast','dark');
});

['#preForm','#postForm'].forEach((formId) => {
  const form = $(formId);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = formId === '#preForm' ? '#preSuccess' : '#postSuccess';
    $(success).classList.add('show');
    if (formId === '#preForm') document.querySelector('#historias').scrollIntoView({behavior:'smooth'});
  });
});

$$('[data-video]').forEach(btn => {
  btn.addEventListener('click', () => {
    $('#videoFrame').src = btn.dataset.video;
    $('#videoModal').classList.add('open');
    $('#videoModal').setAttribute('aria-hidden','false');
  });
});
$('#closeVideo').addEventListener('click', () => {
  $('#videoFrame').src = '';
  $('#videoModal').classList.remove('open');
  $('#videoModal').setAttribute('aria-hidden','true');
});

const questions = [
  '¿Qué sueño dejaste pendiente?',
  '¿Qué siempre quisiste aprender?',
  '¿Qué actividad disfrutas hacer?',
  '¿Qué experiencia de tu vida puede ayudarte a comenzar algo nuevo?',
  '¿Qué pequeño paso puedes dar hoy?'
];
let current = 0;
const answers = [];
function updateQuestion(){
  $('#questionText').textContent = questions[current];
  $('#answerBox').value = answers[current] || '';
  $('#progressBar').style.width = ((current + 1) / questions.length * 100) + '%';
  $('#reflectionResult').textContent = current === questions.length - 1 ? 'Al finalizar, escribe una acción sencilla que puedas iniciar desde hoy.' : '';
}
$('#nextQuestion').addEventListener('click', () => {
  answers[current] = $('#answerBox').value;
  if(current < questions.length - 1){ current++; updateQuestion(); }
  else { $('#reflectionResult').textContent = 'Muy bien. Tu próximo paso ya empezó: reconocer lo que deseas construir.'; }
});
$('#prevQuestion').addEventListener('click', () => {
  answers[current] = $('#answerBox').value;
  if(current > 0){ current--; updateQuestion(); }
});
updateQuestion();

const routeLinks = {
  estudiar: {
    title: 'Ruta sugerida: formación y capacitación',
    text: 'Comienza revisando cursos del SENA, Betowa y cursos gratuitos de Bogotá.',
    links: [
      ['Betowa SENA','https://betowa.sena.edu.co/'],
      ['Área Andina','https://www.google.com/aclk?sa=L&ai=DChsSEwiJncWz6bKVAxWopVoFHcP9N1IYACICCAEQAxoCdnU&co=1&ase=2&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgPfcMgbrWQuBmSMPY76uBbqT1xraFqE-enWCvhT49J5E9Lqfiag-hQaAsjtEALw_wcB&cid=CAASZuRoDNGNIB43YKDrU1954HTfIqjUTORK_g0dNK1jEPaIef66ufNmp3cNHV7x0yIaa3YOhk8x4sUgzlWDUqRUN-2XV_iXiQQiU_59qWEKhEwhpdcPTuIq9U9e8VeOr6CULYzoh4hxUQ&cce=2&category=acrcp_v1_32&sig=AOD64_0v4w27I53QowAJ57ze5g_MTzYeSQ&q&nis=4&adurl&ved=2ahUKEwiP3Lyz6bKVAxUFZjABHSiRJnYQ0Qx6BAgYEAE'],
      ['Cursos Bogotá','https://bogota.gov.co/tag/cursos-gratuitos'],
      ['SENA','https://www.sena.edu.co/']
    ]
  },
  emprender: {
    title: 'Ruta sugerida: emprendimiento',
    text: 'Organiza tu idea, busca formación y revisa opciones de apoyo institucional.',
    links: [
      ['Fondo Emprender','https://www.fondoemprender.com/'],
      ['SENA','https://www.sena.edu.co/']
    ]
  },
  empleo: {
    title: 'Ruta sugerida: empleo',
    text: 'Explora oportunidades laborales y convocatorias dirigidas a personas mayores de 50 años.',
    links: [
      ['Oportunidades 50+','https://desarrolloeconomico.gov.co/secretaria-de-desarrollo-economico-ofrece-mas-de-400-oportunidades-laborales-162-exclusivas-para-personas-mayores-de-50-anos/'],
      ['Bogotá','https://bogota.gov.co/']
    ]
  },
  bienestar: {
    title: 'Ruta sugerida: bienestar y hobbies',
    text: 'Busca actividades de aprendizaje, arte, cultura o tecnología que fortalezcan tu bienestar.',
    links: [
      ['Cursos gratuitos Bogotá','https://bogota.gov.co/tag/cursos-gratuitos'],
      ['Cursos virtuales SENA','https://zajuna.sena.edu.co/']
    ]
  }
};
$('#routeBtn').addEventListener('click', () => {
  const value = $('#routeSelect').value;
  const box = $('#routeResult');
  if(!value){
    box.innerHTML = '<strong>Selecciona una opción para ver la recomendación.</strong>';
    box.classList.add('show');
    return;
  }
  const item = routeLinks[value];
  box.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><ul>${item.links.map(([label,url]) => `<li><a href="${url}" target="_blank" rel="noopener">${label}</a></li>`).join('')}</ul>`;
  box.classList.add('show');
});

$('#searchBtn').addEventListener('click', () => {
  const value = $('#searchInput').value.trim().toLowerCase();
  const result = $('#searchResult');
  if(!value){ result.textContent = 'Escribe una palabra para orientarte.'; return; }
  if(value.includes('emprend')){
    result.textContent = 'Te recomendamos revisar la sección de Emprendimiento y Fondo Emprender.';
  } else if(value.includes('emple')){
    result.textContent = 'Te recomendamos revisar oportunidades laborales para personas mayores de 50 años.';
  } else if(value.includes('arte') || value.includes('hobby') || value.includes('bienestar')){
    result.textContent = 'Te recomendamos revisar cursos gratuitos y actividades de bienestar.';
  } else {
    result.textContent = 'Te recomendamos iniciar por Betowa, SENA y cursos gratuitos de Bogotá.';
  }
  document.querySelector('#oportunidades').scrollIntoView({behavior:'smooth'});
});

const chatToggle = $('#chatToggle');
const chatWindow = $('#chatWindow');
chatToggle.addEventListener('click', () => chatWindow.classList.toggle('open'));
$$('#chatWindow [data-answer]').forEach(btn => {
  btn.addEventListener('click', () => $('#chatAnswer').textContent = btn.dataset.answer);
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.12});
$$('.reveal').forEach(el => revealObserver.observe(el));

let counted = false;
const impact = $('#impacto');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !counted){
      counted = true;
      $$('.counter').forEach(counter => {
        const target = Number(counter.dataset.target);
        let value = 0;
        const step = Math.max(1, Math.ceil(target / 45));
        const timer = setInterval(() => {
          value += step;
          if(value >= target){ value = target; clearInterval(timer); }
          counter.textContent = value;
        }, 30);
      });
    }
  });
},{threshold:.25});
if(impact) counterObserver.observe(impact);
