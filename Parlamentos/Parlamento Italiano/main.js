
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const FdIcolor = "#0033cc";
const Pdcolor = "#ff0000";
const Legacolor = "#0000cc";
const FIcolor = "#00ccff";
const NMcolor = "#69c936";
const M5Ecolor = "#ffff00";
const AIVcolor = "#cf212a";
const AVScolor = "#cc0000";

canvas.height = 450;
canvas.width = 1320;
ctx.lineWidth = "20";

var numberSeats;

function operationSeats(numberSeats) {
    let calculo = (numberSeats / 400) * 3.00;
    return calculo;
}


//AVS
//11 e
var AVSnumber = operationSeats(11);
AVS(0, AVSnumber);

function AVS(inicio, fin) {
    ctx.strokeStyle = AVScolor;
    ctx.beginPath();        
    ctx.translate(650, 500);
    ctx.rotate(3.14 + AVSnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//AIV
//21 e
var AIVnumber = operationSeats(21);
AIV(0, AIVnumber);

function AIV(inicio, fin) {
    ctx.strokeStyle = AIVcolor;
    ctx.beginPath();
    ctx.rotate(AVSnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//M5E
//52 e
var M5Enumber = operationSeats(52);
M5E(0, M5Enumber);

function M5E(inicio, fin) {
    ctx.strokeStyle = M5Ecolor;
    ctx.beginPath();
    ctx.rotate(AIVnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PD
//27
var Pdnumber = operationSeats(69);
PD(0, Pdnumber);

function PD(inicio, fin) {
    ctx.strokeStyle = Pdcolor;
    ctx.beginPath();
    ctx.rotate(M5Enumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//FdI
//118 e
var Fdinumber = operationSeats(118);
FDI(0, Fdinumber);

function FDI(inicio, fin) {
    ctx.strokeStyle = FdIcolor;
    ctx.beginPath();
    ctx.rotate(Pdnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//LEGA
//66 e
var Leganumber = operationSeats(66);
LEGA(0, Leganumber);

function LEGA(inicio, fin) {
    ctx.strokeStyle = Legacolor;
    ctx.beginPath();
    ctx.rotate(Fdinumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//FI
//44 e
var FInumber = operationSeats(44);
FI(0, FInumber);

function FI(inicio, fin) {
    ctx.strokeStyle = FIcolor;
    ctx.beginPath();
    ctx.rotate(Leganumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//NM
//10 e
var NMnumber = operationSeats(10);
NM(0, NMnumber);

function NM(inicio, fin) {
    ctx.strokeStyle = NMcolor;
    ctx.beginPath();
    ctx.rotate(FInumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}