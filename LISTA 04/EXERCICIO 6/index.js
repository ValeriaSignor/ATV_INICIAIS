let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
let altura = document.getElementById("altura").value
let base = document.getElementById("base").value

fetch('elefante.php?base='+base+'&altura='+altura).then(function(resultado){
       
    return resultado.text();
}).then(function (texto) {
    
   let mensagem = document.getElementById('mensagem');
   mensagem.innerText = "A area do retangulo eh "+ texto
   
}).catch (function(erro) {
    console.error(erro)
})
})  