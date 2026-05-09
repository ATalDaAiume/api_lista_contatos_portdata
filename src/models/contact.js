let contacts = []

class Contact {
    constructor(id, name, telefone) {
        this.id = id
        this.name = name
        this.telefone = telefone
    }

    save() {
        contacts.push(this)
    }

    static fetchAll() {
        return contacts
    }

    static findById(id) {
        return contacts.find(contact => contact.id === id)
    }

    static removeById(id) {
        contacts = contacts.filter(contact => contact.id !== id)
    }

    static updateName(id, name) {
        const contact = contacts.find(contact => contact.id === id)
        if (contact) contact.name = name
    }
}

module.exports = Contact