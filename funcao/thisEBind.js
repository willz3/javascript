const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
        
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcionar e OO

/**
 * Definindo que a função falar definida no objeto, sempre aponte pro contexto daquele objeto usando o bind.
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()