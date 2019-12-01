function Pessoa(){
    this.idade = 0
    /**
     * Para amarrar o contexto da classe para ser utilizado mais tarde, é possível criar uma variável self que recebe o contexto do objeto e com ela é realizado ao acesso
     * dos atributos do objeto, ou com o bind. Como a atribuição de this está dentro de pessoa, o contexto acaba sendo o do objeto.
     * É melhor usar uma Arrow function do que usar self ou bind quando se quer preservar o contexto.
     */
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa