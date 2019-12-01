const fs = require('fs')


/** __dirname é uma constante que está presente em todos os módulos e arquivos do node */
const caminho = __dirname + '/arquivo.json'

//Sincrono
//Chance de travar o EventLoop caso o arquivo seja muito grande
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})


/**
 * Forma mais usada para ler um arquivo.json
 * Ja devolve um objeto em vez de um JSON
 * Deve ser especificado a extensão do arquivo
 */
const config = require('./arquivo.json')
console.log(config.db);

/**
 * Ler uma pasta
 */
fs.readdir(__dirname, (err, conteudo) => {
    console.log('Conteúdo na pasta');
    console.log(conteudo);
})