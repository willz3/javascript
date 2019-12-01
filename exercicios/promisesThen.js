/**
 * 
 * Uma promise trabalha com dois parametros, @param {resolve, reject}.
 * O @param {resolve} é uma função chamada quando o retorno de uma chamada que executou com sucesso e só é possível devolver um parametro por meio dele.
 * Caso seja necessário devolver mais de uma informação, devolva um objeto.
 * O @param {reject} é uma função chamada quando ocorreu algum erro com a execução da função.
 */
function testandoPromises(frase){
    return new Promise((resolve, reject) => {
        resolve(frase)
    }) 
}

testandoPromises('Alo!!')
.then(frase => {
    console.log(frase);
})

/**
 * <====== Aplicando setTimeOut a promise. ======>
 *  
 *  O setTimeOut é uma função assync (assincrona) que executa após um determinado tempo de espera determinado. O mesmo trabalha com intervalo de tempo em milisegundos,
 *  logo quando o tempo é passado em segundos, é múltiplicado por 1000.
 */
function mostrarFraseDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(frase)
        // o setTimeOut trabalha com milisegundos, por isso os segundos são multiplicados por mil
        }, segundos * 1000)
        
     })
 }

mostrarFraseDepoisDe(3, 'Mostrando depois de 3 segundos').then(result => {
    console.log(result);
});
 