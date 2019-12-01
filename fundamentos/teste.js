let pessoa = {
    nome: 'Willian Vassilek',
    idade: 20,
    endereco: {
        rua: 'Marechal xxx',
        numero: 1100
    }
}

const {endereco: {rua, numero}} = pessoa
console.log(rua, numero);

