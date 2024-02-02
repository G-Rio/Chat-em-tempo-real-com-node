//para definir http
const http = require('http');
//para importar express
const express = require('express');
const aplicacao = express();

//Criar servidor
const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp)

io.addListener('connection', (socket) => {
    console.log('Um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
    
})


//Disse para a aplicação express utilizar o html e css que esta na pasta public
aplicacao.use(express.static('public'));








servidorHttp.listen(1000, 'ip trocar ip');
