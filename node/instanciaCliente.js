const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

/**
 * Como a instancia nova retorna uma função, deve-se colocar parenteses na frente para que seja devlvido uma função.
 */
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
/**
 * O valor a seguir será 3, isso porque o contador A e o contador B receberam o mesmo contador do modulo exports.
 */
console.log(contadorB.valor);

contadorC.inc()
contadorC.inc()
/**
 * O valor a seguir será 1, isso porque o contador A e o contador B receberam o diferentes instancias do mesmo objeto devido o factory.
 */
console.log(contadorD.valor);