const pessoa = {
    nome:'Willian',
    idade: 20,
    peso: 73
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
// Vai devolver um array com sub-arrays com atributos chave e valor
console.log(Object.entries(pessoa))

// definir um novo campo ao objeto passando configurações para o mesmo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento);
