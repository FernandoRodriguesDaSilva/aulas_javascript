class CalcController{
// usando private sempre fazer os getter e setter
// criação de atributos
constructor(){

	this._locale = 'pt-BR';
	this._displayCalcEl = document.querySelector("#display");
	this._dateEl = document.querySelector("#data");
	this._timeEl = document.querySelector("#hora");
	this._date;
	this.initialize();
	this.initButtonsEvents();
	this.operation = [];  // é um array
}
// Manipular DOM inicializando data e hora no display
initialize(){
	// inicializar hora automaticamente
	this.setDisplayDateTime();
	// apresentando a data e a hora 
	let interval = setInterval(()=>{

		this.setDisplayDateTime();

	}, 1000 );
/*   para a execução do processo
	setTimeout(()=>{
		clearInterval(interval);
	}, 5000);*/
} 

//////////////////////////////
// retorna o valor que está guardado 
get displayCalc(){
	return this._displayCalcEl.innerHTML;
}
// Atribui o valor 
set displayCalc(value){
	this._displayCalcEl.innerHTML = value;
}
////////////////////////
get dataNow(){
	return new Date();
}

set dataNow(value){
	this._date = value;
}

////////////////////////////
get displayTime(){
	return this._timeEl.innerHTML;
}

set displayTime(value){
	this._timeEl.innerHTML = value;
}
/////////////////////////////
get displayDate(){
	return this._dateEl.innerHTML;
}

set displayDate(value){
	this._dateEl.innerHTML = value;
}
//////////Criando um metodo para inicializar a data e a hora

setDisplayDateTime(){
	this.displayDate = this.dataNow.toLocaleDateString(this._locale,{day:"2-digit", month:"long", year:"numeric"});
	this.displayTime = this.dataNow.toLocaleTimeString(this._locale);
}


//////////////////EVENTOS DO BUTTONS /////////////////////

addEventListenerAll(element,events,fn){
// transformar events em array e passa em cada event
events.split(' ').forEach(event => {
	// adiciona cada elemento um de cada vez (ou click ou drag) // ou é um ou é outro
	element.addEventListener(event, fn, false); 
});
}
/////////////////////////// metodos da calculadora para aparecer no display//////////////////

// metodo que pega a ultima posiçao do array
getLastOperation(){
	// retornando // tem o array = array novamente - 1 ( pra pegar o ultimo)
	return this._operation[this._operation.length - 1];
}

isOperator(value){
	// Se existe value dentro dessa array ?
	return ([ '+', '=','*','-','/','%'].indexOf(value) > -1);
}


// Adicionar sempre no ultimo array (value armazena o numero ou operação e ponto)
addOperation(value){
	// Se ultimo numero detro do metodo(getLastOperation) não é numero (ou é + - * / ou .)
	if(isNaN(this.getLastOperation())){
		// quando for string ( + - * / ou .)
		// criar um metodo isOperator pra ver se é um operador
		if(this.isOperator(value)){
			// pegar o ultimo item
			 this._operation[this._operation.length - 1] = value;
		}else {
			// outra coisa
			console.log(value);
		}

	} else {
		// quando for number
		// cria uma variavel // pega o ultimo valor e converte para string concatena com outra string
		let newValue = this.getLastOperation().toString() + value.toString();
		// adiciona dentro do array 
		this._operation.push(newValue);
	}
	this._operation.push(value)
	console.log(this._operation);
}
// Elimina sempre o ultimo array 
clearEntry(){
	this._operation.pop();
}
// Imprime na tela
setError(){
	this.displayCalc = "Error";
}
// limpa o array recebe 0 novamente
clearAll(value){
	this._operation = [];
}

execBtn(value){
	switch(value){
		// clicando no metodo clearAll() ac apaga tudo
		case 'ac':
		this.clearAll();
		break;
		case 'ce':
		this.clearEntry();
		break;
		case 'soma':
		this.addOperation('+'); 
		break;
		case 'multiplicao':
		this.addOperation('*');
		break;
		case 'divisao':
		this.addOperation('/');
		break;
		case 'subtracao':
		this.addOperation('-');
		break;
		case 'porcento':
		this.addOperation('%');
		break;
		case 'igual':
		this.addOperation('=');
		break;
		case 'ponto':
		this.addOperation('.');
		break;

		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':

		this.addOperation(parseInt(value)); 
		break;

		default:
		this.setError();
		break;

	}
}

initButtonsEvents(){
	// pega todas a tag <g> que são filhas de buttons
	let buttons = document.querySelectorAll("#buttons > g, #parts > g");
	// metodo para percorrer para cada um dos botões
	buttons.forEach((btn, index)=>{
// recebe o evento de click e drag o que deve ser feito
this.addEventListenerAll(btn, 'click drag', e => {
	// trazendo o valor da class btn formatado
	let textBtn = (btn.className.baseVal.replace("btn-",""));
	// executando a ação do botão
	this.execBtn(textBtn);
});
// colocar o curso de mouse pra ficar uma seta
this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
	btn.style.cursor = "pointer"
})
})
}

/////////////// Fim Eventos de buttons //////////////////////////////



}