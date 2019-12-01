function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(3, 2)

/**
 * Você pode passar apenas 1 valor para o parametro. O segundo parametro será por default: Undefined.
 * Quando a soma for realizada, será apresentado o erro de NaN (Not a Number) pois b não foi definida.
 */
imprimirSoma(3)

/**
 * É possível passar parametros a mais, porém, o restante de parametros excedentes a assinatura do méto-
 * do da assinatura serão desconsiderados. 
 */
imprimirSoma(3, 2, 5, 6, 7, 8)

/**
 * É possível não passar nada por parametro, porém também resultará em um NaN.
 */
imprimirSoma()

/**
 * Função com retorno;
 * Esse método de assinatura, caso o parametro não for passado para a função, ele assumirá o valor
 * Default = ao que você definir, nessa caso, 0.
 */
function soma(a, b = 0){
    return a + b
}

console.log(soma(3));
