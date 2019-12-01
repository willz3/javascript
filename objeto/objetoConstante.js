const pessoa = {
    nome: 'Willian'
}
pessoa.nome = 'Rafael'
console.log(pessoa.nome);

// A referencia de memória de um objeto constante não pode ser alterada.
//pessoa = {noe: 'Teste'}

/**
 * Congela o objeto, impedindo que seus valores sejam alterados.
 */
Object.freeze(pessoa)

pessoa.nome = 'Willian'

console.log(pessoa);

