/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav--menu'),
      navToggle=document.getElementById('nav--toggle'),
      navClose=document.getElementById('nav--close') 


/*=============== REMOVE MENU MOBILE ===============*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
        navClose.classList.add('show-close')
        navToggle.classList.add('remove-toggle')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
        navClose.classList.remove('show-close')
        navToggle.classList.remove('remove-toggle')
     })
}

const navLink=document.querySelectorAll(".nav__link")
navLink.forEach(n=>n.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
    navClose.classList.remove('show-close')
    navToggle.classList.remove('remove-toggle')
}))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                 :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollY=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY>sectionTop && scrollY<=sectionHeight+sectionTop){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line' ? 'add' :'remove'](iconTheme)
}

themeButton.addEventListener('click',()=>{
       document.body.classList.toggle(darkTheme)
       themeButton.classList.toggle(iconTheme)
       localStorage.setItem('selected-theme',getCurrentTheme())
       localStorage.setItem('selected-icon',getCurrentIcon())

})

    /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:1500,
    delay:200,
    reset:true

}
)

sr.reveal(`.home__img,.newsletter__container, .footer__logo, .footer__content, .footer__description, .footer__info`)
sr.reveal(`.home__data`,{origin:'bottom'})
sr.reveal(`.about__data `,{origin:'left'})
sr.reveal(` .recently__data`,{interval:100})
sr.reveal(`.about__img , .recently__img`,{origin:'right'})
sr.reveal(`.popular__card`,{interval:100})