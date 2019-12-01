function rand({min = 0, max = 1000}){
    //Como o objeto foi desestruturado tenho acesso as variáveis min e max
    const valor = Math.random() * (max - min) + min
    //arredonda valores
    return Math.floor(valor)
}
/**
 * Criando objeto que será desestruturado na assinatura da função
 */
const obj = {min: 40, max: 50}

console.log(rand(obj));
/**
 * Também é possivel passar faltando um atributo, assim ele assumirá o valor default atribuído
 * na assinatura
 */

console.log(rand({min: 50}));
console.log(rand({max: 50}));
console.log(rand())
