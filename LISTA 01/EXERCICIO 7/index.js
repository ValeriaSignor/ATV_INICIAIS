let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
     let operacoes = document.getElementById("operacoes").value
    

if (operacoes === "adicionar") {

   document.getElementById("saudacao").innerText =  Number(num1) + Number(num2);
}
    if (operacoes === "subtrair"){
        document.getElementById("saudacao").innerText = num1 - num2;
    }
      if (operacoes === "dividir"){
        document.getElementById("saudacao").innerText = num1 / num2;
    }
        if (operacoes === "multiplicar"){
            document.getElementById("saudacao").innerText = num1 * num2;
    }

})
