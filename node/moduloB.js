/**
 * O module.exports é usado para exportar (para fora) tudo que poderá ser usado deste modulo. Esse sistema de modulos se chama o commons js
 */

let teste = 'Coisas que não estão dentro do module.exports não são visiveis fora do módulo.'
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}