function verificarPreco() {
    const produto = document.getElementById('text').value.toLowerCase()
    const resultadoElemento = document.getElementById('result');
    
    switch (produto) {
        case '1':
        case 'morango': 
            resultadoElemento.innerHTML = 'R$ 2,50/Kg'
            break;
        case '2':
        case 'banana':
            resultadoElemento.innerHTML = 'R$ 1,50/Kg'
            break;
        case '3':
        case 'limão':
            resultadoElemento.innerHTML = 'R$ 1,29/Kg'
            break; 
        case '4':
        case 'uva':
            resultadoElemento.innerHTML = 'R$ 3,50/Kg'
            break;
        case '5':
        case 'abacaxi':
            resultadoElemento.innerHTML = 'R$ 6,20/Kg'
            break;
        default:
            resultadoElemento.innerHTML = 'Produto não encontrado!' 
    }
}