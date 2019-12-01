
function tratarErroELancar(erro){
    // Retornar um erro
    //throw new Error('...')
    // Retornar somente uma string
    //throw 'Deu erro'
    /**
     * Devolver um objeto como erro
     */
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    }
}

const obj = {nome: 'Willian'}
imprimirNome(obj)
