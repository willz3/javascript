const obj = {}

function Obj(nome){
    this.nome = nome;
    this.exec = function (){
        console.log('Executando!')
    }
}

const objUm = new Obj('Rafael')

console.log(new Obj('Willian'));
objUm.exec()    
