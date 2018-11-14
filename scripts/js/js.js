/////////////////////////////////////////////////
///// Funçao //////////////////////////////
//////////////////////////////////////////////////

function funcao1(){
	console.log("função numero 1 ")
}

function funcao2(){
	console.log("funcão numero 2 e ")
}

console.log("chamando a ") + funcao2() + funcao1()

///////////////////////////////////////////////////////////
//// Orientado a objeto
///////////////////////////////////////////////////////////

// POO
var objFernando = {
	nome: "Fernando Rodrigues da Silva",
	tema: "formação javascript mestre Jedi",
	mistrarAula: function(){
		console.log("Entendendo orientação a objeto com javascript")
	}
}

// Mostrando tudo que está dentro do objeto
console.log(objFernando)
// Acessando a propriedades do objeto
console.log("chamando o método do objeto funcao: " + objFernando.mistrarAula())
console.log("chamando o nome o tema: " + objFernando.tema)
console.log("chamando o nome: " + objFernando.nome)

////////////////////////////////////////////////////////////
// Programação Sincrona
///////////////////////////////////////////////////////////

var curso = "formaçao javascript mestre jedi!!"

console.log("Olá seja bem vindo ao curso " + curso)

for(let index=0;index<11;index++){
	console.log(index)
}

console.log("Este curso é muito top")

////////////////////////////////////////////////////////////
// Programação ASSincrona
///////////////////////////////////////////////////////////
console.log("Exemplo de programação assincrona")
// function timer programação assíncrona
setTimeout(function(){// quantidade de segundos executa por último 
	console.log("executando programaçao assicrona")}, 5000)
console.log("Fim do exemplo assincrona.")