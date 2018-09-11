var alunos = ["joao","Maria","josé"];
var num_primos = [2,3,5,7,11,13];
// mostra o numero de elementos
console.log(alunos.length);



var grupos = [
["joao","Pedro","Paulo"],
["Ibaté","Araraquara","São Carlos"],
["Vendedor","Metalúrgico","Químico"],
["Futebol","Volei","Natação"]
];

console.log(grupos.length);

console.log(grupos[1]);
console.log("Meu nome é " + grupos[0][1] + ", Eu moro em "
+ grupos[1][0] + " e trabalho como " + grupos[2][1] 
+ " e aos finais de semana eu gosto de fazer " + grupos[3][2]);


/* Operações com arrays */

var cursos = ["html", "Python","PHP"];
// adicionando um novo elemento ao final de um array
cursos.push("Javascript");
console.log(cursos);
// adicionando um novo elemento ao inicio de um array
cursos.unshift("Delphi");
console.log(cursos);
// removendo o ultimo elemento de um array
cursos.pop();
console.log(cursos);
// removendo o primeiro elemento de um array
cursos.shift(cursos);
console.log(cursos);

/* Trocando elemento de array */

var ingredientes = ["Bola","Faca","cadeira"];
// trocando elemento 0
ingredientes[0] = "Bolinha pequena";

console.log(ingredientes);

/* pegando parte de um array */

alunos = ["joao","maria","jose","elisa","pedro"];
// pegando o 2 ultimos arrays
console.log(alunos.slice(-2));
// pulando o 2 primeiro arrays
console.log(alunos.slice(2));


