/**
 * Conceito de undefined: Variável que ainda não foi inicializada
 */
let valor
console.log(valor)

/**
 * A variável foi inicializada porém é nula:
 */
valor = null;
console.log(valor);

let objeto = {}
/**
 * É possivel acessar o campo de um objeto que não foi declarado, isso porque o que vem antes do atri-
 * buto está setado, nesse caso, o que vem antes do .nome, é produto, e produto foi setado,  
 * mesmo que vazio, então o que irá disparar é um undefined. Caso tente acessar um objeto.nome.campo
 * ele vai estourar exception
 */
console.log(objeto.nome);
objeto.nome = 'Willian'
console.log(objeto);

objeto.nome = undefined

/**
 * Da pra testar se uma variável não foi declarada usando os exclamações, já que undefined em boolean
 * é false
 */
console.log(!!objeto.nome);


