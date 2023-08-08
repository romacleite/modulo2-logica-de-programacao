console.log('\n=== FUNÇÕES ===')

//usar o function statement para já 'invocar' a estrutra da função
//function name(params) {
//    
//}

// Declaração da Função
function saudacao() {
    var mensagem = "Boa Noite!";
    return mensagem
};

//Execução da Função
saudacao(); //quando eu executo uma instrução, ela não tem uma obrigatoriedade de me entregar alguma info. caso não esteja definido, a resposta é undefined.
var msgRetorno = saudacao();
console.log(msgRetorno);


