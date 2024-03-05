
const canvas = document.getElementById("general");
const ctx = canvas.getContext("2d");

const EPPColor = "#01dfd7";
const SDColor = "#ff0000";
const VERDESColor = "#70aa11";
const GUEColor = "#c9044b";
const IDColor = "#271085";
const ECRColor = "#1eb3a4";
const RENEWColor = "#ffff00";


canvas.height = 2450;
canvas.width = 1320;

ctx.lineWidth = "20";

var numberSeats;

function operationSeats(numberSeats) {
    let calculo = (numberSeats / 350) * 3.14;
    return calculo;
}

//SUMAR
//27
var SUMARnumber = operationSeats(27);
SUMAR(0, SUMARnumber);

function SUMAR(inicio, fin) {
    ctx.strokeStyle = GUEColor;
    ctx.beginPath();    
    ctx.translate(650, 500);
    ctx.rotate(3.14);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PODEMOS
//6 e
var PODEMOSnumber = operationSeats(6);
PODEMOS(0, PODEMOSnumber);

function PODEMOS(inicio, fin) {
    ctx.strokeStyle = VERDESColor;
    ctx.beginPath();
    ctx.rotate(SUMARnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//CATALANES
//14 e
var CATALANESnumber = operationSeats(14);
CATALANES(0, CATALANESnumber);

function CATALANES(inicio, fin) {
    ctx.strokeStyle = "#ffff00";
    ctx.beginPath();
    ctx.rotate(PODEMOSnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PSOE
//120 e
var PSOEnumber = operationSeats(120);
PSOE(0, PSOEnumber);

function PSOE(inicio, fin) {
    ctx.strokeStyle = SDColor;
    ctx.beginPath();
    ctx.rotate(CATALANESnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//PP 
//137 e
var PPnumber = operationSeats(137);
PP(0, PPnumber);

function PP(inicio, fin) {
    ctx.strokeStyle = EPPColor;
    ctx.beginPath();
    ctx.rotate(PSOEnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//VOX
//33 e
var VOXnumber = operationSeats(33);
VOX(0, VOXnumber);

function VOX(inicio, fin) {
    ctx.strokeStyle = IDColor;
    ctx.beginPath();
    ctx.rotate(PPnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}


//MIXTO
//32
var MIXTOnumber = operationSeats(32);
MIXTO(0, MIXTOnumber);

function MIXTO(inicio, fin) {
    ctx.strokeStyle = ECRColor;
    ctx.beginPath();
    ctx.rotate(VOXnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}


//NoInscritos
//
// var NInumber = operationSeats(1);
// NI(0, NInumber);

// function NI(inicio, fin) {
//     ctx.strokeStyle = "#000000";
//     ctx.beginPath();
//     ctx.rotate(ECRnumber);
//     ctx.arc(0, 0, 450, inicio + 0.01, fin);
//     ctx.stroke();
// }


//GUE
//39
var GUEnumber = operationSeats(39);
GUE(0, GUEnumber);

function GUE(inicio, fin) {
    ctx.strokeStyle = GUEColor;
    ctx.beginPath();    
    ctx.translate(0, 1500);
    ctx.rotate(3.14);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//Verdes
//67 e
var Verdesnumber = operationSeats(67);
Verdes(0, Verdesnumber);

function Verdes(inicio, fin) {
    ctx.strokeStyle = VERDESColor;
    ctx.beginPath();
    ctx.rotate(GUEnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//Renew
//98 e
var Renewnumber = operationSeats(98);
Renew(0, Renewnumber);

function Renew(inicio, fin) {
    ctx.strokeStyle = "#ffff00";
    ctx.beginPath();
    ctx.rotate(Verdesnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//SD
//147 e
var SDnumber = operationSeats(147);
SD(0, SDnumber);

function SD(inicio, fin) {
    ctx.strokeStyle = SDColor;
    ctx.beginPath();
    ctx.rotate(Renewnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//EPP 
//187 e
var EPPnumber = operationSeats(187);
EPP(0, EPPnumber);

function EPP(inicio, fin) {
    ctx.strokeStyle = EPPColor;
    ctx.beginPath();
    ctx.rotate(SDnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

//ID
//76 e
var Idnumber = operationSeats(76);
IDparty(0, Idnumber);

function IDparty(inicio, fin) {
    ctx.strokeStyle = IDColor;
    ctx.beginPath();
    ctx.rotate(EPPnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}


//ECR
//62
var ECRnumber = operationSeats(62);
ECR(0, ECRnumber);

function ECR(inicio, fin) {
    ctx.strokeStyle = ECRColor;
    ctx.beginPath();
    ctx.rotate(Idnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}


//NoInscritos
//75
var NInumber = operationSeats(75);
NI(0, NInumber);

function NI(inicio, fin) {
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.rotate(ECRnumber);
    ctx.arc(0, 0, 450, inicio + 0.01, fin);
    ctx.stroke();
}

