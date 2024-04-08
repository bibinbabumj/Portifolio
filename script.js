
const menu_button=document.querySelector(".hamburger-menu");
const mobile_menu=document.querySelector(".mobile-nav");

menu_button.addEventListener('click',()=>{
    menu_button.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
})