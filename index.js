const express = require('express');
const path = require('path');
require('dotenv').config();

// Express app
const app = express();

// Node server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Socket messages
io.on('connection', client => {
    console.log('client connected')

    client.on('disconnect', () => { console.log('client disconnected') });

    client.on('message', (payload) => {
        console.log('Message', payload);

        io.emit('message', { admin: 'new message' });
    });
});

// Public path
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log('server running on port:', process.env.PORT)
});