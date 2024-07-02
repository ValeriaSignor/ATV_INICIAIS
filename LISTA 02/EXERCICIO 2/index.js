let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    
    let nome =  document.getElementById("nome").value
    let email =  document.getElementById("email").value

    if (!nome) {
     window.alert("o nome é obrigatorio")

     }
     if (!email) {
          window.alert("o email é obrigatorio")
     
          }
   let meuJson = {
        nome: nome,
        email: email
   }
   
   console.log(meuJson)
})

