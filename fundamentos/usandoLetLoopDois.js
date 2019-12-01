const funcs = []
/**
 * Diferente do var, o let e utilizando o conceito de cloger/clo alguma coisa (uma função tem cons-
 * ciencia do local aonde ela foi definida), ele guarda o valor de i, pois i nesse caso é uma variável
 * de escopo do bloco.
 * daquele momento.
 */
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]()
funcs[8]()