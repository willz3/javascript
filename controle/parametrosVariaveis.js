/**
 * É possível passar parametros variáveis para uma função em JS e acessa-los pela palavra reservada arguments
 */
function soma(){
    let soma = 0;
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1, 2, 3, 4, 5));
