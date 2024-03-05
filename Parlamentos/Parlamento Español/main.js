
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const PPColor = "#4669e3";
const PsoeColor = "#ff0000";
const SumarColor = "#e51c55";
const PodemosColor = "#9370DB";
const VoxColor = "#69c936";
const MixtoColor = "#523214";
const ERCColor = "#cf212a";
const JXCColor = "#43e6d2";

canvas.height = 450;
canvas.width = 1320;
ctx.lineWidth = "20";

var numberSeats;

function operationSeats(numberSeats) {
    let calculo = (numberSeats / 350) * 3.14;
    return calculo;
}


//MIXTO
//12
var MIXTOnumber = operationSeats(12);
MIXTO(0, MIXTOnumber);

function MIXTO(inicio, fin) {
    ctx.strokeStyle = MixtoColor;
    ctx.beginPath();        
    ctx.translate(650, 500);
    ctx.rotate(3.10 + MIXTOnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//CATALANES
//7 e
var ERCnumber = operationSeats(7);
ERC(0, ERCnumber);

function ERC(inicio, fin) {
    ctx.strokeStyle = ERCColor;
    ctx.beginPath();
    ctx.rotate(MIXTOnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//CATALANES
//7 e
var JXCnumber = operationSeats(7);
JXC(0, JXCnumber);

function JXC(inicio, fin) {
    ctx.strokeStyle = JXCColor;
    ctx.beginPath();
    ctx.rotate(ERCnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PODEMOS
//6 e
var PODEMOSnumber = operationSeats(6);
PODEMOS(0, PODEMOSnumber);

function PODEMOS(inicio, fin) {
    ctx.strokeStyle = PodemosColor;
    ctx.beginPath();
    ctx.rotate(JXCnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}


//SUMAR
//27
var SUMARnumber = operationSeats(27);
SUMAR(0, SUMARnumber);

function SUMAR(inicio, fin) {
    ctx.strokeStyle = SumarColor;
    ctx.beginPath();
    ctx.rotate(PODEMOSnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PSOE
//120 e
var Psoenumber = operationSeats(120);
PSOE(0, Psoenumber);

function PSOE(inicio, fin) {
    ctx.strokeStyle = PsoeColor;
    ctx.beginPath();
    ctx.rotate(SUMARnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PP 
//137 e
var PPnumber = operationSeats(137);
PP(0, PPnumber);

function PP(inicio, fin) {
    ctx.strokeStyle = PPColor;
    ctx.beginPath();
    ctx.rotate(Psoenumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//VOX
//33 e
var VOXnumber = operationSeats(33);
VOX(0, VOXnumber);

function VOX(inicio, fin) {
    ctx.strokeStyle = VoxColor;
    ctx.beginPath();
    ctx.rotate(PPnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}