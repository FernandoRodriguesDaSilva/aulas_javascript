// passando uma tag html dentro de uma id usando javascript adicionando nova string
document.getElementById("caixa_amarela").innerHTML = "<h1>" + 'caixa está amarela' + "</h1>";
// armazernar conteudo em uma variavel , depois imprimir a variavel com a tag html nova
var conteudo = document.getElementById("caixa_azul").innerHTML;
 document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo + "</h1>";
 


