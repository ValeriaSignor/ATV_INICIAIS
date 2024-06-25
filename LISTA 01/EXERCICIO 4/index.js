let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
     let idade = document.getElementById("idade").value
    

if (idade >= 18) {
document.getElementById("anodenascimento").innerText = ("você é maior de idade\n");
}else{
document.getElementById("anodenascimento").innerText = ("você é menor de  idade\n");     
}

})