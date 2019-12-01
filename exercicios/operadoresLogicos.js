function compras(trabalho1, trabalho2){
    const comprarTV50 = trabalho1 && trabalho2
    const comprarSorvete = trabalho1 || trabalho2
    /**
     * !! transforma a operação em boolean e lê byte a byte comparando as variaveis. Também conhecido como bitwise xor. As condições devem ser diferentes uma da outra.
     */
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)
    /**
     * Retornando um objeto sem precisar usar o conjunto de chave valor, pois dessa forma as chaves serão os nomes das próprias variáveis.
     */
    const comprarTV32 = trabalho1 != trabalho2 //Smulando Operador exclusivo
    return {comprarTV50, comprarSorvete, comprarTV32}
}

console.log(compras(true, false));
