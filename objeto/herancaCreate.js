const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}
const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome);

