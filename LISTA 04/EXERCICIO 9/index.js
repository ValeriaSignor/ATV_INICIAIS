let botao = document.getElementById("botao")

botao.addEventListener("click", function() {

let valor = document.getElementById("valor").value

fetch('elefante.php?valor='+valor).then(function(resultado){
       
    return resultado.text();
}).then(function (texto) {
    
   let mensagem = document.getElementById('mensagem');
   mensagem.innerText = "O ano " +valor+ texto
   
}).catch (function(erro) {
    console.error(erro)
})
})  
