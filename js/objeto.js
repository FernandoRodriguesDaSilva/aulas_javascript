var funcionario = {
    'nome' : 'Fernando Rodrigues',
    'ano_nasc' : 1988,
    'cpf' : '35472827809',
    'cargo' : 'Analista de Sistema'
};

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);
// alterando elemento de um objeto
funcionario.cargo = 'Gerente de T.I';
// criando novo elento de um objeto
funcionario.cnh = "45424554425124";

console.log(funcionario);

/* Entendendo objeto dentro de array  */

var cursos = [{
    'titulo':'Aprenda programação em Python',
    'avaliacoes':'50',
    'alunos':'2300',
    'categorias':['programas','tecnologia']
},
{
'titulo':'Aprenda PHP e faça sites dinâmicos',
'avaliacoes':'180',
'alunos':'350',
'categorias':['Desenvolvimento web','programacão']
},
{
    'titulo':'Excel do Zero ao Avançado',
    'avaliacoes':'420',
    'alunos':'1800',
    'categorias': ['produtividade','gestão']
}];
// imprimindo objetos especificos no array
console.log(cursos[1].categorias[0]);


// Mudar um objeto dentro de uma array
cursos[2].categorias[1] = "Administração de empresas";
//imprimindo o novo objeto incluso
console.log(cursos);