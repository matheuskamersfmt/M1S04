const idade = window.prompt('Qual a sua idade?');
const resultadoElemento = document.getElementById('result');
    
if (idade >= 18) {
    resultadoElemento.innerText = 'Você é maior de idade.';
    console.log('Você é maior de idade.')
} else {
    resultadoElemento.innerText = 'Você é menor de idade,';
    console.log('Você é menor de idade.')
}
    
