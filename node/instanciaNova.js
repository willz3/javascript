/**
 * Dessa forma está sendo utilizado uma fabrica de criação de contadores. Toda vez que o contador for requerido, será criado uma nova instância.....
 */
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}