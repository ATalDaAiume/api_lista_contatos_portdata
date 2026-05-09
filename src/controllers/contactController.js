const Contact = require('../models/contact')

class ContactController {
    static insert(req, res) {
        const { id, name, telefone } = req.body
        const contact = new Contact(id, name, telefone)
        contact.save()
        res.status(201).json(contact)
    }

    static findAll(req, res) {
        const contacts = contact.fetchAll()
        res.json(contacts)
    }

    static update(req, res) {
        const { id, name } = req.body
        Contact.updateName(id, name)
        res.status(200).json({ message: "Contact updated" })
    }

    static remove(req, res) {
        const { id } = req.params
        Contact.removeById(Number(id))
        res.status(200).json({ message: "Contact deleted" })
    }
}

module.exports = ContactController