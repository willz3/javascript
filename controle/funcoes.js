function run(fun){
    fun()
}

function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

/**
 * Chamar uma função e chamar a função retornada pela função.
 */
soma(2, 3)(4)

/**
 * Ou atribuir a função retornada pela função a uma variável e então chamar a variável passando um parametro para a execução da função salva;
 */
const somar = soma(2, 3)
somar(2)