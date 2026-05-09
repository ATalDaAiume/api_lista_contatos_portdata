const express = require('express')
const ContatoController = require('./controllers/contatoController')

const app = express()

app.use(express.json())

app.post('/api/contatos', ContatoController.insert)
app.get('/api/contatos', ContatoController.findAll)
app.put('/api/contatos', ContatoController.update)
app.delete('/api/contatos/:id', ContatoController.remove)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
