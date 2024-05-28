const body = document.body;
let currentTheme = body.getAttribute('data-theme')||'light';
const modeBtn=document.querySelector('.mode-btn');
modeBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const childElement=modeBtn.childNodes[1];
    if (currentTheme === 'light') {
        childElement.classList.remove('fa-moon');
        childElement.classList.add('fa-sun');
        currentTheme='dark';
        body.setAttribute('data-theme', currentTheme);
    } else {
        childElement.classList.remove('fa-sun');
        childElement.classList.add('fa-moon');
        currentTheme='light';
        body.setAttribute('data-theme', currentTheme);
    }
})
const mobileMenu=document.querySelector('.mobile-menu');
const bars=document.querySelector('.fa-bars');
bars.addEventListener("click",(event)=>{
    event.preventDefault();
    toggleMobileMenu();
})

function toggleMobileMenu(){
    mobileMenu.classList.toggle('active');
}
function isInViewport(el){
    const rect=el.getBoundingClientRect();
    return(
        rect.top>=0 &&
        rect.left>=0 &&
        rect.bottom<=(window.innerHeight || document.documentElement.clientHeight) &&
        rect.right<=(window.innerWidth || document.documentElement.clientWidth)
    );
}
function activateTimeLineItems(){
    const items=document.querySelectorAll('.timeline-item');
    items.forEach(item=>{
        if(isInViewport(item)){
            item.classList.add('active');
        }
    })
}

window.addEventListener('scroll',activateTimeLineItems);
window.addEventListener('load',activateTimeLineItems);