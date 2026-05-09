require('dotenv').config();
const express = require('express');
const database = require('./config/database');
const contatoController = require('./controllers/contatoController');

const app = express();
app.use(express.json());

app.post('/contatos', contatoController.criar);
app.get('/contatos', contatoController.listar);
app.patch('/contatos/:id', contatoController.alterar);
app.delete('/contatos/:id', contatoController.deletar);

const PORT = process.env.PORT || 3000;

database.db.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });