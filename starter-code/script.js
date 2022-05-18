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
    
    
const month = document.querySelector(".month");
const toggleBtn = document.querySelector(".toggle_btn");
const ballOff = document.querySelector(".off_ball");
const ballOn = document.querySelector(".on_ball");
const year = document.querySelector(".year");
const time = document.querySelectorAll(".time");
const bPrice = document.querySelector('#b_p');
const pPrice = document.querySelector('#p_p');
const bnPrince = document.querySelector('#bn_p');


function toggleOn(){
    month.style.opacity = "0.5";
    year.style.opacity = "1";
    ballOff.style.display = 'none';
    ballOn.style.display = 'block';
    toggleBtn.style.backgroundColor = '#000000';
    for(let i in time){
        time[i].innerHTML = 'per year';
    }
    bPrice.innerHTML = '$190.00'
    pPrice.innerHTML = '$390.00'
    bnPrince.innerHTML = '$990.00'
}

function toggleOff(){
    month.style.opacity = "1";
    year.style.opacity = "0.5";
    ballOff.style.display = 'block';
    ballOn.style.display = 'none';
    toggleBtn.style.backgroundColor = '#DFDFDF';
    for(let i in time){
        time[i].innerHTML = 'per month';
    }
    bPrice.innerHTML = '$19.00'
    pPrice.innerHTML = '$39.00'
    bnPrince.innerHTML = '$99.00'
}



ballOff.addEventListener('click', toggleOn)
ballOn.addEventListener('click', toggleOff);
