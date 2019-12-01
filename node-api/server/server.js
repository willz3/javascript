const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Muda muda...!');
})

app.listen(3001)