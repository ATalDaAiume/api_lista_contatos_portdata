const express = require('express')
const ContactController = require('./controllers/contactController')

const app = express()

app.use(express.json())

app.post('/api/contacts', ContactController.insert)
app.get('/api/contacts', ContactController.findAll)
app.put('/api/contacts', ContactController.update)
app.delete('/api/contacts/:id', ContactController.remove)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
