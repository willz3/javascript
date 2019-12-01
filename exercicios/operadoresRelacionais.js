console.log('1' == 1);
console.log('1' === 1);
console.log('3' != 3);
console.log('3' !== 3);

const d1 = new Date(0)
const d2 = new Date(0)

/**
 * Comparar objetos por === e == não funciona pois os objetos trabalham por objeto de memória
 */
console.log(d1 === d2);
console.log(d1 == d2);
console.log(d1.getTime() === d1.getTime());
console.log(d1.getTime() == d1.getTime());

/**
 * Curiosidade para teste de variáveis null e undefined
 */
console.log(undefined == null);
console.log(undefined === null);