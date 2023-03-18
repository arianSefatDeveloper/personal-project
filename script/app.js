let toggleIcon  = document.querySelector(".nav__toggle-icon");
let menu  = document.querySelector(".menu");
let cover  = document.querySelector(".cover");


toggleIcon.addEventListener("click" , function(){
    console.log('hi');
    toggleIcon.classList.toggle("nav__toggle-icon--open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--open")
})