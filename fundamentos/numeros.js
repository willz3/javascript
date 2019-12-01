const pesoUm = 1.0
const pesoDois = Number('2.0')

console.log(pesoUm, pesoDois)

// O tipo number serve tanto para números com casas decimais quanto para números inteiros

// verifica se a variável é um integer
console.log(Number.isInteger(pesoUm))
console.log(Number.isInteger(pesoDois))

const avaliacaoUm = 9.78
const avaliacaoDois = 8.80

const total = avaliacaoUm * pesoUm + avaliacaoDois * pesoDois
const media = total / (pesoUm + pesoDois)

// Função que arrendonda para N casas decimais
console.log(media.toFixed(2))

// Número para String
console.log(media.toString())

// Número inteiro para binário
console.log(media.toString(2))
console.log(typeof media)
