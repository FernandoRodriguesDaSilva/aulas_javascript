///////////////////////////////////////////////////
//////////////DOM//////////////////////////////////

var nome_variavel = window.document.getElementById("nome")

var estadoSelect = document.getElementById("inputState")

function selecionarCampos{
	console.log("typeof: " + typeof nome_variavel)
	console.log("object call: " + Object.prototype.toString.call(nome_variavel));
	console.log("recuperar valor com value: " + nome_variavel.value)
	//nome_variavel.disabled = true;
	console.log("disabled:  nome_variavel.disabled = true;")
	//nome_variavel.readyOnly = true;
	console.log("ReadOnly:  nome_variavel.readOnly = true;")
}


function selecionarCampoSelect(){
	console.log("object call: " + Object.prototype.toString.call(estadoSelect));
}

