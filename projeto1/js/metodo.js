var aluno = {
    'nome': "Fernando",
    'sobrenome': "Rodrigues",
    'ano_nasc':1988,

    'nome_completo': function() {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },

    'idade': function(){
        var idade_hoje = 2018 - this.ano_nasc;
        return idade_hoje;
    }
};
//imprimindo nome completo
console.log(aluno.nome_completo());
//imprimindo idade de hoje
console.log('hoje eu tenho: '+ aluno.idade());

// Selecionando id do elemento html
console.log( typeof document.getElementById("tudo_obj").innerHTML);


