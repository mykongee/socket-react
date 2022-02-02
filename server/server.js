const express = require('express');
const cors = require('cors');
const http = require('http');
// const { Server, Socket } = require('socket.io');

const options = {
    cors: {
        origin: 'http://localhost:8080/socket.io',
        methods: ['GET, POST']
    }
}
const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, options);
// const io = new Server(server);
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:8080/socket.io',
//         methods: ['GET, POST']
//     }
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('hit root endpoint /');
    return res.sendStatus(200);
})

app.get('/api', (req, res) => {
    console.log('hit endpoint /api');
    return res.sendStatus(200);
})

// server socket 
// in react client, client socket

io.on('connection', (socket) => {
    console.log('SOCKETIO CONNECTED FROM SERVER');
    // callback parameter is what's emitted from client
    socket.on('test', (asd) => { // take chat message and store in db, as well as update every other listener
        console.log('from client:', asd);
        io.emit('test', asd); // from io server emit 'test' event
        // one io server
        // multiple react clients listening to io server for events
        // io.emit('test', {username: names(), message: msg}); // query database here to store 
    })
})

server.listen(PORT, () => console.log('io listening on port 3000'));


    // const messages = [
        // {username: 'socket server', message: 'hello io'}
    // ]
    // const alternate = () => {
    //     let curr = 'user1';
    //     return () => {
    //         console.log(curr);
    //         if (curr === 'user1') {
    //             curr = 'user2'
    //             return curr; 
    //         }
    //         if (curr === 'user2') {
    //             curr = 'user1';
    //             return curr; 
    //         }
    //     } 
    // }
    // const names = alternate();