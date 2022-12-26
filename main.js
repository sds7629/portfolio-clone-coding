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
    
    const scrollTo = document.querySelector(linkTo);
    scrollTo.scrollIntoView({behavior:'smooth'});
});


