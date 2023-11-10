//Funcao para manipular texto usando JS
function editartexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Funcao para gerar um numero aleatorio 
function gerar_numero(){
    return parseInt(Math.random() * 10 +1);
}
//Atribuindo o numero gerado a uma variavel
let numero_secreto = gerar_numero();

//Funcao para gerar numero aleatorio ao clicar no botao
document.getElementById('novo_jogo').addEventListener('click', function() {
    numero_secreto = gerar_numero();
    editartexto('p', 'Um novo numero secreto acabou de ser gerado, Boa sorte tente adivinhar.');
});

//Funcao para verificar se o numero que o usuario indicou e maior, menor ou igual ao numero secreto
document.getElementById('tentativa').addEventListener('click', verificar_tentativa);
function verificar_tentativa(){
    let tentativa = document.querySelector('input').value;
    if (tentativa == numero_secreto){
        editartexto('p', 'Parabéns, Voce acertou o número secreto.');
    }else if(tentativa < numero_secreto){
        editartexto('p', 'O numero secreto é Maior que '+ tentativa);
    }
    else{
        editartexto('p', 'O Numero secreto é Menor que '+ tentativa);
    }
}