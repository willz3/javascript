/**
 * Armazenando uma função em uma variável
 */
const imprimirSoma = function(a, b){
    console.log(a + b)
}

// chamando a função
imprimirSoma(2, 3)

/**
 * Função arrow em uma variável
 */
const soma = (a, b) => {
    return a+b
}
console.log(soma(2, 3));

/**
 * Função arrow com retorno implicito. Feito para quando a função terá apenas uma linha, caso 
 * tenha algo para retornar retornará o valor desejado, que nesse caso é a-b, caso não tenha,
 * retornará undefined.
 */
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimirUmParametro = a => console.log(a);
imprimirUmParametro('Legal!')
