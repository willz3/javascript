const nome = 'Willian'
/**
 * O template suporta quebras de linha, para passar váriaveis para serem mostradas é só passar
 *  ${variavel}
 * Para utilizar o template basta apenas utilizar craze (``)
 */
const template = `
Olá ${nome}, 
tudo bem?!`
console.log(template)

/**
 * Atribuir uma função para uma váriavel, não sei se é isso mesmo, validar com alguém o que é "=>"
 */
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)