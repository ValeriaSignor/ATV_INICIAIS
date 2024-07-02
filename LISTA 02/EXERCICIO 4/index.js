let formulario= document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let table = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    let nameCell= newRow.insertCell(0)
    let emailCell= newRow.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;

})