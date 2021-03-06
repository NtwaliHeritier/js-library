const modal = document.querySelector('#myModal');
const renderForm = () => {
  modal.style.display = 'block';
};

const btn = document.getElementById('add-book');
btn.onclick = renderForm;

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
