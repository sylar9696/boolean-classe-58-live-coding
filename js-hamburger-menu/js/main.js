const menuToggle = document.querySelector('.header-right > a');
const closeButton = document.querySelector('.close');

menuToggle.addEventListener('click',
  function() {
    const domHamburgerMenu = document.querySelector('.hamburger-menu');
    domHamburgerMenu.classList.add('active');

  }
);

closeButton.addEventListener('click',
  function() {
    const domHamburgerMenu = document.querySelector('.hamburger-menu');
    domHamburgerMenu.classList.remove('active');
  }
);
