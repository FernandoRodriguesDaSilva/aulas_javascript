/*Exercicio 1 - 
Os ids das caixas são "num_1", "num_2" e "resultado". 
Para que o resultado saia em negrito, 
coloque-o dentro da tag <strong>. 
*/
// Tranformando string em float (parseFloat)
var numero1 = parseFloat( document.getElementById('num_1').innerHTML);
var numero2 = parseFloat (document.getElementById('num_2').innerHTML);

resultado = (numero1 + numero2);

document.getElementById('resultado').innerHTML = "<strong>" + resultado + "</strong>";


/*  Exercico 2
 
Crie uma função para converter graus Celsius para Fahrenheit, 
depois invoque a função usando o valor que está na caixa azul 
e solte o resultado na caixa amarela. 
Os ids são "caixa_azul" e "caixa_amarela".

A formula de conversão é: F = (9 * C / 5) + 32 
*/

function CelsiusToFahrenheit(temp_celsus){
    var temp_f = (9 * temp_celsus / 5) + 32;
    return temp_f;
}

var Celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);

var Fahrenheit = CelsiusToFahrenheit(Celsius);

document.getElementById('caixa_amarela').innerHTML = "<strong>" + Fahrenheit + "</strong>";

/* Exercicio 3 */

var grupos = [
    ["João","Maria"],
    ["Pedro","Joana","André","Júlio"],
    ["Carolina","Helena","Marcelo"]
];
// Seleciona o 2 ultimos array da var grupos
var novos_grupos = grupos.slice(-2,);
// Adiciona um novo array na var novos_grupos
novos_grupos.push(["Mariana","Felipe","Carla"]);

console.log(novos_grupos);


/* Exercicio - 4  */

    var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        /*   4 b */
        'total_aval':function(){
            var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas +
            this.n_aval_2_estrelas + this.n_aval_1_estrela;
            return t_aval;
        },
        'media_aval':function(){
            var m_aval = ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas ) + (3 * this.n_aval_3_estrelas ) + (2 * this.n_aval_2_estrelas ) + (1 * this.n_aval_1_estrela )) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas +
            this.n_aval_2_estrelas + this.n_aval_1_estrela);
            return m_aval;
        }
    }

    var categoria_principal = curso.categoria[0];

    document.getElementById("categoria_principal").innerHTML = categoria_principal;

    console.log(total_aval);

/* 4b invocando função */
var total_av = curso.total_aval();
var media_av = curso.media_aval().toFixed(2);
// soltando os valores dentro do id
document.getElementById('media_aval').innerHTML = media_av;
document.getElementById('total_aval').innerHTML = total_av;

/* Exercicio - 5
Crie um objeto para guardar nome, 
sobrenome e e-mail de uma pessoa. 
Em seguida, crie uma função que receba o objeto como argumento e retorne um string
com o html de uma tabela conforme o modelo abaixo.
Em seguida Solte o html da tabela dentro elemento que tem id="tabela". 
*/







/*


*/




