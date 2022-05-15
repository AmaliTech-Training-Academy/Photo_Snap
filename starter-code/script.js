const menu = document.querySelector(".menu");
const closes = document.querySelector(".close");
const nav = document.querySelector("#active_nav");
const invite_btn = document.querySelector(".active_btn");

function clickMenu(){
    menu.style.display = 'none';
    closes.style.display = 'block';
    nav.style.display = 'flex';
    invite_btn.style.display = 'block';
    
}

function clickClose(){
        closes.style.display = 'none';
        menu.style.display = 'block';
        nav.style.display = 'none';
        invite_btn.style.display = 'none';

    }
    

menu.addEventListener('click', clickMenu);

closes.addEventListener('click', clickClose);
    
    

