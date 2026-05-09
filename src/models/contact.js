let contacts = []

class Contact {
    constructor(id, nome, telefone) {
        this.id = id
        this.nome = nome
        this.telefone = telefone
    }

    save() {
        contatos.push(this)
    }

    static fetchAll() {
        return contatos
    }

    static findById(id) {
        return contatos.find(contato => contato.id === id)
    }

    static removeById(id) {
        contatos = contatos.filter(contato => contato.id !== id)
    }

    static updateName(id, nome) {
        const contato = contatos.find(contato => contato.id === id)
        if (contato) contato.nome = nome
    }
}

module.exports = Contato