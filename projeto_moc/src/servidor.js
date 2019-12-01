const porta = 8080
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (request, response) => {
    response.send(bancoDeDados.getProdutos()) // Converte automaticamente para JSON
})

app.get('/produtos/:id', (request, response) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.deleteProduto(request.params.id)
    response.send('DELETE REALIZADO')
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
    
})