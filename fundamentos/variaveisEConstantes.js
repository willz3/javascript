var a = 3
let b = 4

// com var, você pode redeclarar a variável que a IDE não irá reclamar.
var a = 30

/* com let, é como se você definisse variáveis em Java, onde a IDE não deixa você redeclara-lás
 * apenas trocar seu valor ao decorrer do código
 *  let b = 40 testar que dará erro.
*/
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// Declaração de constantes
const c = 5
// c = 50 dará erro pois não se pode alterar o valor de uma constante.

console.log(c)