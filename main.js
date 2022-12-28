`use strict`;

//Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


//navbar clicked move

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click',(event)=>{

    const targetTo = event.target;
    const linkTo = targetTo.dataset.link;

    if(linkTo == null){
        return;
    }
    
   scrollIntoView(linkTo);
});

//contact me clicked move

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});


//Arrow To up




//scroll opcity

const homeScroll = document.querySelectorAll('.home__container');
const homeScrollElement = document.querySelector('#home');
const homeHeight = homeScrollElement.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    const homePercent = window.scrollY / homeHeight;
    if(homePercent >= 0 && homePercent < 1){
        homeScroll[0].style.opacity = 1 - homePercent;
    }
    else if(homePercent >= 1 && homePercent < 2){
        homeScroll[1].style.opacity = 2 - homePercent;
    }
    else if(homePercent >= 2 && homePercent < 3){
        homeScroll[2].style.opacity = 2.8- homePercent;
    }
    else if(homePercent >= 3 && homePercent < 4){
        homeScroll[3].style.opacity = 3.7 - homePercent;
    }
});

//show Arrow Button
const arrowBtn = document.querySelector('.scroll__up-btn');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2){
        arrowBtn.classList.add('visible');
    }else{
        arrowBtn.classList.remove('visible');
    }
});


//Handle click on Arrow btn
arrowBtn.addEventListener('click', () =>{
    scrollIntoView('#home');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}