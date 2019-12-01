const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    
    let funcionariosJson = response.data

    let funcionariaChina = funcionariosJson.filter((p) => p.pais === 'China' && p.genero === 'F').reduce(function(acumulador, atual){
        if(atual.salario < acumulador.salario){
            return atual
        } else {
            return acumulador
        }
    })
    
    console.log(funcionariaChina);
     
})
