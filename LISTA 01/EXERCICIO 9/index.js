function atualizarhora(){
    let data = new Date ()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

 
     document.getElementById("horario").innerText = hora + ":" + minutos + ":" + segundos

    }

    atualizarhora()
    setInterval (atualizarhora, 1000)

