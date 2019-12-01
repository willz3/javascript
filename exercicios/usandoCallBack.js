/**
 * Motivos para usar promises em vez de callbacks.
 */

 const http = require('http')

 const getTurma = (letra, callback) => {
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
     http.get(url, res => {
         let resultado = ''

         /**
          * 
          * @param {data} contém as informações retornadas pela requisição http
          */
         res.on('data', dados => {
             resultado += dados
         })

         /**
          * 
          * @param {end} indica o final das informações do data.
          */
         res.on('end', () => {
             callback(JSON.parse(resultado))
         })
     })
 }

 /**
  * Não usar callBackHell (uma callback dentro da outra). Fica dificil de ler.
  */
 let nomes = []
 getTurma('A', alunos => {
     nomes = nomes.concat(alunos.map(a => `Turma A - ${a.nome}`))
     getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `Turma B - ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `Turma C - ${c.nome}`))
            console.log(nomes);
        })
     })
 })
