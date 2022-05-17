const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");
const button = document.querySelector(".nav-container button");

function clickOpen() {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block'
    nav.style.display = 'block';
    button.style.display = 'block';
}

function clickClose() {
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block';
    nav.style.display = 'none';
    button.style.display = 'none';
}

menuOpen.addEventListener('click', clickOpen);
menuClose.addEventListener('click', clickClose);