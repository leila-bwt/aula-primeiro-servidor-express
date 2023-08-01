const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('Essa é minha rota principal.')
});

app.get('/home', (requisicao, resposta) => {
    resposta.send('Olá... Esse é o meu primeiro servidor com o express')
});

app.get('/array', (requisicao, resposta) => {
    const array = [10, 20, 30, 40, 50]
    resposta.send(array)
});

app.listen(3000);
