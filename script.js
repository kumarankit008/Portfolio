const hamburger= document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

function mobileMenu(){
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}
hamburger.addEventListener("click",mobileMenu);
