// usando a notação literal
const obj1 = {}

// new
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, desconto){
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)

console.log(p1.getPrecoComDesconto());

//Funlçai Factory
 
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());
