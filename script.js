const form = document.getElementById('form');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value === '') {
    msg.textContent = 'Por favor, insira um e-mail válido.';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'Conta criada com sucesso! 🚀';
    msg.style.color = 'green';
    email.value = '';
  }
});
