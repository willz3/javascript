const escola = "Cod3r"

/**
 * Função de String que retorna um caractere de String. No caso o caractere 4 ou R no caso de Cod3r
 */
console.log(escola.charAt(4))

/**
 * Devolve o código da tabela ASC correspondente ao 3° caractere da String
 */
console.log(escola.charCodeAt(3))

/**
 * Retorna o indice do array que se encontra o valor 3
 */
console.log(escola.indexOf('3'))

/**
 * Mostra os caracteres de uma String a partir do primeiro indice passado
 */
console.log(escola.substring(1))

/**
 * Mostra os caracteres de uma String com base no intervalo de indices passado, mas não inclui o ultimo
 * valor de índice nesse caso o 3.
 */
console.log(escola.substring(0, 3))

/**
 * Concatenação de Strings com textos e variáveis
 */
console.log('Escola '.concat(escola).concat('!'))
/**
 * Da pra concatenar assim porém não é aconselhavel, porque se for concatenar número com String 
 * vai dar erro. Verificar exemplo na cuidados.js
 */
console.log('Escola ' + escola + '!')

/**
 * substitui o primeiro 3 por e
 */
console.log(escola.replace(3, 'e'))

/**
 * Expressão regular que substituí todos os digitos dentro do texto pela letra E
 */
console.log(escola.replace(/\w/g, 'e'))
/**
 * String separadas por virgula podem ser transformadas em array;
 * A cada virgula, ele divide a String em um novo índice do array.
 */
console.log('Willian,Rafael,Vassilek'.split(','))
