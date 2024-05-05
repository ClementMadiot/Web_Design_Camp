const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i')

window.sr = new ScrollReveal();

//**** Nav Bar ****/
menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open')

  //; icon 
  const isOpen = navLinks.classList.contains('open')
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line': 'ri-menu-line')

})

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

//**** Scroll ****/

//: left ://
const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
}
sr.reveal('.container_left h1',{
  ...scrollRevealOption,
})
sr.reveal('.container_left .container_btn',{
  ...scrollRevealOption,
  delay:400,
})

//: right ://
sr.reveal('.container_right h4',{
  ...scrollRevealOption,
  delay:1000,
})
sr.reveal('.container_right h2',{
  ...scrollRevealOption,
  delay:1300,
})
sr.reveal('.container_right h3',{
  ...scrollRevealOption,
  delay:1600,
})
sr.reveal('.container_right p',{
  ...scrollRevealOption,
  delay:1900,
})

//: img ://

sr.reveal('.container_right .tent-1',{
  duration:1000,
  delay:2300,
})
sr.reveal('.container_right .tent-2',{
  duration:1000,
  delay:2500,
})