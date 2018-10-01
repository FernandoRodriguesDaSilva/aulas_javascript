// Desafio do Relógio

var hora_atual = new Date();

var horas = hora_atual.getHours();
var minutos = hora_atual.getMinutes();
var segundos = hora_atual.getSeconds();

document.getElementsById("relogio").innerHTML = horas.toString() + ":"  ":" + segundos.toString();