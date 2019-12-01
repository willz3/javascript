const divisao = function(x, y){
    return x/y
}

const imprimeResultado = function(a, b, operacao = divisao){
    console.log(operacao(a, b));
    
}
/**
 * Ao chamar a função imprimeResultado passando os parametros A e B, a operacao é chamada passando os mesmos valores, já que na assinatura do método, operacao recebe a 
 * função de divisão por default.
 */
imprimeResultado(4, 2)

/** 
 * Também é possível sobrescrever a função padrão na assinatura passando outra função anônima na chamada no método.
 */
imprimeResultado(4, 2, function(a, b){
    return a + b
})

/**
 * Também é possível passar uma arrow function pelo parametro.
 */
imprimeResultado(3, 3, (a, b) => a * b)

/**
 * Também é possível declarar funções anônimas dentro dos objetos atribuindo-as a um atributo do objeto.
 */
const pessoa = {
    falar: function(){
        console.log('Opa');
    }
}

pessoa.falar()