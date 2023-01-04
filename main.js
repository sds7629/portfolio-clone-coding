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

    navbarMenu.classList.remove('open');
    scrollIntoView(linkTo);
});

//navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
   navbarMenu.classList.toggle('open');
});

//contact me clicked move

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});


//Arrow To up




//scroll opcity

const homeScroll = document.querySelector('.home__container');
const homeHeight = homeScroll.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    const homePercent = window.scrollY / homeHeight;
    homeScroll.style.opacity = 1 - homePercent;
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


// 1. 모든 섹션 요소들을 가지고 와야함
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

let selectedNavItem = navItems[0];
let selectedNavIndex = 0;
function selectNavItem(selected){
    selectedNavItem.classList.remove('active')
           selectedNavItem = selected;
           selectedNavItem.classList.add('active');
}

//ScrollIntoView 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)])
}


const observerOptions = {
    root: null,
    rootMargin:'0px',
    threshold: 0.3,
}
const observerCallback = (entries, observer) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting && entry.intersectionRatio > 0){
           const index = sectionIds.indexOf(`#${entry.target.id}`);
           let selectedIndex;
           //스크롤링이 아래로 되어서 페이지가 올라가는 경우
           if(entry.boundingClientRect.y < 0){
            selectedNavIndex = index + 1;
           } else{
            selectedNavIndex = index - 1;
           }
        }
        });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
    if(window.scrollY == 0){
        selectedNavIndex = 0;
    }else if(Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight){
        selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);
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