document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const links = document.querySelector('.links');
  const manageButton = document.querySelector('.button_header');

  menuToggle.addEventListener('click', () => {
      links.classList.toggle('active');
      manageButton.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuModal = document.getElementById('menu-modal');
  const closeModal = document.getElementById('close-modal');

  // Abre o modal
  menuToggle.addEventListener('click', () => {
    menuModal.classList.add('active');
  });

  // Fecha o modal
  closeModal.addEventListener('click', () => {
    menuModal.classList.remove('active');
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener('click', (event) => {
    if (event.target === menuModal) {
      menuModal.classList.remove('active');
    }
  });
});