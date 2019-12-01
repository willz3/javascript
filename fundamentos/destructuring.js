const pessoa = {
    nome: 'Willian Rafael da Silva Vassilek',
    idade: 20,
    endereco: {
        rua: 'Souza Naves',
        numero: 3705
    }
}

const { nome, idade } = pessoa
/**
 * As variáveis nome e idade passam a existir quando são extraídas do objeto
 */
console.log(nome, idade)

/**
 * Extrair variáveis e atribuí-las a outras.
 */
const {nome: n, idade: i} = pessoa
console.log(n, i)

/**
 * Retirar variáveis que ainda não existem no objeto resultará em undefined
 */

 const {sobrenome, verdadeiro = true} = pessoa
 console.log(sobrenome, verdadeiro);
 
 /**
  * Retirar atributos de dentro de um objeto que está dentro de outro objeto
  */

  const {endereco : {rua, numero} } = pessoa
  console.log(rua, numero);

  /**
   * remover só o objeto
   */
  const {endereco} = pessoa
  console.log('remover só o objeto:', endereco);
/**
 * !Não tentar desestruturar um objeto que não existe que está dentro de um objeto que não existe.!
 */
  
  