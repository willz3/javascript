/* Isso vai resultar em uma operação matematica devido a linguagem ser fracamente tipada. O JavaScript
 * vai identificar isso como um número dentro da string pois tentará fazer a conversão, logo o resultado
 * será 5.
 */
console.log("10" / 2)

/**
 * Não da pra fazer um número .toString()
 */

//console.log(10.toString())

/**
 * Em algumas linguagens isso é possível, o que resulta na multiplicação da String, mostrando
 * Show! duas vezes, porém em JavaScript resulta em Not a Number (NaN)
 */
console.log("Show!" * 2)

/**
 * Operações matemáticas dividas por 0 geram Infinity e não erro.
 */
console.log(7/0)