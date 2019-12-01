/**
 * Escopo maior
 */
var numero = 1
{
    /**
     * Escopo menor
     */
    let numero = 2
    console.log('Dentro: ', numero);
}
/**
 * JS procura primeiramente no escopo menor se existe uma variável numero, caso exista usa o valor dela
 * lá dentro, caso contrário, irá usar o valor do escopo maior.
 */

console.log('Fora: ', numero);

/**
 * Variáveis definidas com var possuem escopo global e função. 
 * Variáveis definidas com let possuem escopo global, de função e escopo de bloco.
 */
