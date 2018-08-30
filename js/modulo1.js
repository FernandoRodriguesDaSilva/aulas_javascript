// exercicio 1
console.log("O arquivo 'modulo1.js' já está funcionando");

var nome="Fernando Rodrigues ";
var ano_nasc = 1988;
ano = 2018 - 1988;
var nome_aluno = "Paulo";
var num_matricula = 4200499;
var prova1 = 6;
var prova2 = 6;
var media;
var telefone="993170700";

// exercicio 2
console.log('Olá, eu me chamo ' + nome + ', tenho ' + ano + ' anos e estou estudando Javascript.');
// exercico 3
media = ((prova1 + prova2) / 2);

console.log("O aluno " + nome_aluno + ', matrícula ' + num_matricula +
 ', obteve a média final de '+ media);

if (media >= 6) {
console.log("O aluno foi aprovado com media " + media + " parabéns!!!! ");
}else {
    console.log("Infelizmente o aluno foi reprovado ");
}

// exercicio 4
console.log(typeof telefone);
console.log("A variavel telefone possui " + telefone.length + " digitos");
if(telefone.lenght <= 9){
    console.log("true")
}else{
        console.log("false");
    }
// exercicio 5
console.log(Math.pow(32,6));
// exercicio 6
 
/*
var typeof; // ilegais porque é um caracter especial
var nome-aluno; // ilegal porque usa -
var 2a_tentativa; // ilegal por começar com numero
var nome completo  // ilegal porque está separado

*/

// exercicio 7
/*

1 = 26
2 = 1.75
3 = undefined
4 = 40
5 = null
6 = numeric

*/

// exercicio 8

console.log('false');
console.log('false');
console.log('true');
console.log('false');
console.log('boolean');
console.log('boolean');

console.log("mostrando os resultado");

var idade = 65;

    console.log(idade != 65); 
    console.log(idade >= 65); 
    console.log("65" == idade);
    console.log(65 !== idade);
    console.log(typeof (idade > 60));
    console.log(typeof (idade > 70));
