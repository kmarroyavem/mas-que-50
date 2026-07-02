const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

$('#menuBtn').addEventListener('click', () => $('#navLinks').classList.toggle('open'));

$('#accessBtn').addEventListener('click', () => $('#accessPanel').classList.toggle('open'));
$('#fontPlus').addEventListener('click', () => {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
  root.style.setProperty('--font-size', Math.min(current + 1, 23) + 'px');
});
$('#contrastToggle').addEventListener('click', () => document.body.classList.toggle('contrast'));
$('#darkToggle').addEventListener('click', () => document.body.classList.toggle('dark'));
$('#resetAccess').addEventListener('click', () => {
  document.documentElement.style.setProperty('--font-size','18px');
  document.body.classList.remove('contrast','dark');
});

['#preForm','#postForm'].forEach((formId) => {
  $(formId).addEventListener('submit', (e) => {
    e.preventDefault();
    const success = formId === '#preForm' ? '#preSuccess' : '#postSuccess';
    $(success).classList.add('show');
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
  '¿Qué te gustaría lograr en cinco años?',
  '¿Qué pequeño paso puedes dar hoy?'
];
let current = 0;
const answers = [];
function updateQuestion(){
  $('#questionText').textContent = questions[current];
  $('#answerBox').value = answers[current] || '';
  $('#progressBar').style.width = ((current + 1) / questions.length * 100) + '%';
  $('#reflectionResult').textContent = current === questions.length - 1 ? 'Al finalizar, escribe una acción sencilla que puedas iniciar esta semana.' : '';
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
