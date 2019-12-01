const funcs = []
/**
 * É possível declarar um array de funções.
 * Nesse caso, a idéia é que o JavaScript respeitasse o I no momento exato em que ele passa no for porém
 * como é uma var, e a mesma não possui escopo de bloco, o valor retornado de I aponta para 10, ou seja,
 * o valor final do I quando saiu do bloco de código.
 */
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]()
funcs[8]()