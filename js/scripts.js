var latitude = 40.87663;
var longitude = -8.08272;
var nome = "joao";
var sobrenome = "Silva";
var telefone = "993170700010";
var biografia = "uma historia de vida ";
var ano_nascimento = 1994;
var preco = 14.99;
var numero_grande = 2.2e45; // significa 2.2x10^45
var idade = '18';
var vtype = true;
var undf;
var nome = "Fernando";
var temperatura = 40;

console.log(latitude);
console.log(longitude);

console.log('Nome completo: ' + nome + ' ' + sobrenome);
console.log('Telefone: ' + telefone + ' possui o uma biografia de ' + biografia);

// Aula - 4 - string
// Pegando pelo array 
console.log('primeira letra do nome: ' + nome[0]);
console.log('ultima letra do nome: '+ nome[3]);
console.log('tamanho de caracteres do telefone: ' + telefone.length);
// Aula - 5 - number
var num1 = 2;
var num2 = 4;

var soma = num1 + num2;
var media = ((soma) / 2);

console.log('A média é: ' + media);
// Operações matemáticas significa 2 elevado a 4 /// 2^4 = 16
console.log(Math.pow(2,4))

/// incrementando valor a variavel
var variavel = 40;
variavel = variavel + 5;
console.log('O valor da variavel agora é : ' + variavel);

variavel+= 5;
console.log("O valor mudou agora é: " + variavel);

// converter variavel Int para o tipo string
var ddd_string = preco.toString();
var tel_string = ano_nascimento.toString();
console.log(ddd_string + ' ' + tel_string)

// converter string para Int
idade = parseInt(idade);
idade++;
console.log(idade);
// tipo de variavel use typeof
console.log(typeof vtype);
// variavel indefinida
console.log(undf);
// imprimindo por array
console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
// apagando variavel 
temperatura = null;
console.log(temperatura);

