const Contato = require('../models/contato')

class ContatoController {
    static insert(req, res) {
        const { id, nome, telefone } = req.body
        const contato = new Contato(id, nome, telefone)
        contato.save()
        res.status(201).json(contato)
    }

    static findAll(req, res) {
        const contatos = contato.fetchAll()
        res.json(contatos)
    }

    static update(req, res) {
        const { id, nome } = req.body
        Contato.updateName(id, nome)
        res.status(200).json({ message: "Contato atualizado" })
    }

    static remove(req, res) {
        const { id } = req.params
        Contato.removeById(Number(id))
        res.status(200).json({ message: "Contato deletado" })
    }
}

module.exports = ContatoController