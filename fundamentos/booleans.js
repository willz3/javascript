let isAtivo = false
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1
/**
 * a variável boolean se torna uma váriavel de número inteiro, mas com negação duas vezes, volta a
 * ser boolean, pois com uma negação, o true se torna false, e com duas negações, o true vira false e
 * se torna true de novo.
 */
console.log(!!isAtivo)

/**
 * Afirmações verdadeiras:
 */
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) // array
console.log(!!{}) // objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

/**
 * Afirmações falsas:
 */
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
/**
 * Testa se a variável String é vázia, caso seja, printa desconhecido, senão printa o conteúdo.
 */
console.log(nome || 'Desconhecido')




