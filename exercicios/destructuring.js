pessoa = {
    nome: 'Willian Vassilek',
    idade: 20,
    endereco:{
        rua: 'Teste',
        numero: 1100
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);
const {endereco: {rua, numero}} = pessoa
console.log(rua, numero);
const {endereco} = pessoa
console.log(endereco);
