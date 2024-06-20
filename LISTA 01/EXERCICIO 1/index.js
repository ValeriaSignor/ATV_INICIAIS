let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
     let nome = document.getElementById("nome").value

     document.getElementById("saudacao").innerText = "OLÁ " + nome + " , ESTE É MEU SITE"


})