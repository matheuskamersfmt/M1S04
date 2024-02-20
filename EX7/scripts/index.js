function selecionaHorário() {
    const horario = document.getElementById('time').value
    
    const hora = parseInt(horario.split(':')[0], 10);

    if (hora >= 5 && hora < 12) {
        console.log("Bom dia");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde");
    } else {
        console.log("Boa noite");
    }
}