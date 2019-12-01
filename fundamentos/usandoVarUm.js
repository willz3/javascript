/**
 * Nota: Variáveis declaradas com var só possuem 2 escopos possíveis: global e local.
 */
{
    {
        {
            var sera = 'Será?!'
        }
    }
}
/**
 * Se uma variável for uma var, é possível resgatar seu valor em diferentes blocos de código, contanto
 * que a var não esteja declarada dentro de uma função.
 */
console.log(sera);

function teste(){
    var local = 223
}

/**
 * o log abaixo irá dar erro, devido a variável não estar no mesmo contexto. Estando definida dentro
 * da função, a mesma é uma variável local.
 */
//console.log(local)
