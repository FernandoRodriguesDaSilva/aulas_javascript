function soma_args(num1,num2){
var soma = num1 + num2;
return soma;
}

function mult_args(num1,num2){
    var multi = num1 * num2;
    return multi;
    }
// adicionando um somar dentro de uma funcao
console.log(soma_args(2,20));
console.log("o resultado foi " + soma_args(200,20));

// adicionando valor dentro da variavel usando funcao
multi = (mult_args(2,3));
console.log("O valor resultado é " + multi);

// CALCULANDO IMC 

function valor_imc(peso,altura){
    var imc  = peso / (altura * altura);
    return imc;
}

// Calculando imc usando o valor que está nas id

// Transforma em um numero flutuavel
var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// criando uma funcão pegando as variaveis
var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);