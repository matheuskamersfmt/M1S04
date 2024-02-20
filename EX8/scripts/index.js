function verificarPar() {
    const numero = document.getElementById('number').value
    const resultadoElemento = document.getElementById('result');
    
    if (numero % 2 === 0) {
        resultadoElemento.innerText = 'O número é par';
        console.log('O número é par')
    } else {
        resultadoElemento.innerText = 'O número é ímpar';
        console.log('O número é ímpar')
    }
}