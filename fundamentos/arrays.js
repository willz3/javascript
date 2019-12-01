/**
 * Nota: Um array é heterogênio devido a linguagem ser fracamente tipada. Pode aceitar vários tipos
 * de dados no mesmo array.
*/
const valores = [7.7, 8.5, 9.5]

// Quantidade de elementos no array
console.log(valores.length)

/**
 * Função que adiciona um valor ao final do array.
 */
valores.push(10)
console.log(valores)

// Função que retira o ultimo valor do array.
valores.pop()
console.log(valores)
/**
 * Deleta um elemento do array com base no indice.
 */
delete valores[0]
console.log(valores)