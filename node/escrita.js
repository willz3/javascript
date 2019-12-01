const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    /** Se o valor de erro for null, vai imprirmir arquivo salvo. A unica resposta para saber se deu tudo certo com a gravação do arquivo,
     * é verificar se foi retornado algum erro.
     */
    console.log(err || 'Arquivo salvo!');
})
