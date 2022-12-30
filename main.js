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


//ScrollIntoView 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


//Work clicked move 
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    //Remove selection
    const active= document.querySelector('.category__btn.selectied')
    active.classList.remove('selectied');
    const target = e.target.nodeName === 'BUTTON' ? e.target:e.target.parentNode;
    target.classList.add('selectied');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});


/** 
const categoryBtn = document.querySelector('.work__categories');
const projectOpa = document.querySelectorAll('.project');
const frontOpa = document.querySelectorAll('.front__end');
categoryBtn.addEventListener('click', (event) =>{
    const categoryTarget = event.target;
    const categoryTargetTo = categoryTarget.dataset.link;
    
    if(categoryTargetTo == null){
        return;
    }
    else if(categoryTargetTo == '.project'){
        projectOpa[0].classList.add('category__opacity');
        projectOpa[1].classList.add('category__opacity');
        projectOpa[2].classList.add('category__opacity');
        projectOpa[3].classList.add('category__opacity');
        projectOpa[4].classList.add('category__opacity');
        projectOpa[5].classList.add('category__opacity');
        projectOpa[6].classList.add('category__opacity');
        projectOpa[7].classList.add('category__opacity');
    }
    else if(categoryTargetTo == '.front__end'){
        frontOpa[0].classList.add('category__opacity');
        frontOpa[1].classList.add('category__opacity');
    }
});
*/