
const express = require('express');
const cors = require('cors');
const{readdirSync} = require('fs')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))
// Definindo a rota após a inicialização do app
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});
const db = require('./db/db');
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT);
    });
};

server();
