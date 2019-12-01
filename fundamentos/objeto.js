const produto = {
    id: 1,
    nome: 'Tênis Nike Revolution 4',
    preco: 79.90
}
console.log(produto);

/**
 * Adição de atributos no objeto de forma dinâmica.
 */
const produtoTeste = {}
produtoTeste.nome = 'Tênis campo adicionado dinâmicamente'
produtoTeste.preco = 0.0
console.log(produtoTeste);

const produtoAux = {
    id: 1,
    nome: 'Tênis Nike com objeto',
    preco: 79.90,
    obj : {
        nome: 'Adicional ao tênis',
        preco: 50.20
    }
}
console.log(produtoAux);

/**
 * Variáveis normalmente recebem o endereço de memória de um objeto, logo se você fizer b = a e alterar
 * algum atributo de b, o mesmo atributo de A será alterado. Isso não acontece com tipos primitivos de
 * dados. Logo, se quiser copiar um objeto por valor, utilizar a função abaixo:
 */
let valor = {name: 'teste'}
let teste = Object.assign({}, valor)
teste.name = 'mudou!'
console.log(valor, teste)

/**
 * deletar um campo de um objeto
 */
delete teste.name
console.log(teste);

