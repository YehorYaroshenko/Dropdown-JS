const menuButton = document.querySelector('.menu')

document.addEventListener('click', func)

function func(event) {
   if (event.target.closest('.menu__button')) {
      menuButton.classList.toggle('menu__active')
   }
   if (!event.target.closest('.menu')) {
      menuButton.classList.remove('menu__active')
   }
}


