class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(element => this.lancamentos.push(element))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2019)
contas.addLacamentos(salario, contaDeLuz)
console.log(contas.sumario());

