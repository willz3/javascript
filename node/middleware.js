/***************** Middleware patern ***************/
/**
 * Notas:
 * Context --> Valor/Objeto passado/transmitido de função a função
 * Next --> Próxima função a ser chamada
 */
const passoUm = (context, next) => {
    context.valorUm = 'mid1'
    next()
}

const passoDois = (context, next) => {
    context.valorDois = 'mid2'
    next()
}

const passoTres = context => {
    context.valorTres = 'mid3'
}
/**
 * Recursividade no if. 
 */
const exec = (context, ...middlewares) => {
    const execMiddleware = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](context, () => execMiddleware(indice + 1))
    }
    execMiddleware(0)
}

const context = {}

exec(context, passoUm, passoDois, passoTres)
console.log(context);
