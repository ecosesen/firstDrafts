var tierra;
var fuego;
var agua;
var aire;

var rotation = 0;
var angle = 0;

var interval = setInterval(movement, 5);

function movement() {
    angle += 0.02;

    fuego = document.getElementsByClassName('uno');
    fuego[0].style.transform = `rotate(${-angle}deg)`;

    tierra = document.getElementsByClassName('dos');
    tierra[0].style.transform = `rotate(${angle}deg)`;

    agua = document.getElementsByClassName('tres');
    agua[0].style.transform = `rotate(${angle * 0.2}deg)`;

    aire = document.getElementsByClassName('cuatro');
    aire[0].style.transform = `rotate(${-angle * 0.1}deg)`;
}



