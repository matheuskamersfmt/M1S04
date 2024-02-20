const pessoa1 = {
    nome: 'Matheus Kamers',
    idade: 29,
    nacionalidade: 'Brasileiro',
    profissão: 'Desenvolvedor de Software'
}

console.log('Print do objeto inteiro', pessoa1)
for (let propriedade in pessoa1) {
    console.log(`Pessoa 1 - ${propriedade}: ${pessoa1[propriedade]}`)
}

const pessoa2 = {
    nome: 'Giovanna Bang',
    idade: 23,
    nacionalidade: 'Brasileira',
    profissão: 'Produtora de Eventos'
}

console.log('Print do objeto inteiro', pessoa2)
for (let propriedade in pessoa2) {
    console.log(`Pessoa 2 - ${propriedade}: ${pessoa2[propriedade]}`)
}

const pessoa3 = {
    nome: 'Leonardo Kamers',
    idade: 21,
    nacionalidade: 'Brasileiro',
    profissão: 'Estudante de Química'
}

console.log('Print do objeto inteiro', pessoa3)
for (let propriedade in pessoa3) {
    console.log(`Pessoa 3 - ${propriedade}: ${pessoa3[propriedade]}`)
}