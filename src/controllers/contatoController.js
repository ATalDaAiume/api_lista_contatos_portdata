const Contato = require('../models/contato');

class ContatoController {
    validarNome(nome) {
        if (!nome) return false;
        const palavras = nome.trim().split(/\s+/);
        if (palavras.length < 2) return false;
        return palavras.every(p => p.length >= 3);
    }

    async criar(req, res) {
        try {
            const { nome, telefone } = req.body;

            if (!new ContatoController().validarNome(nome)) {
                return res.status(400).send();
            }

            const contato = await Contato.create({ nome, telefone });
            return res.status(201).send(contato);
        } catch (error) {
            return res.status(400).send();
        }
    }

    async listar(req, res) {
        try {
            const contatos = await Contato.findAll();
            return res.status(200).send(contatos);
        } catch (error) {
            return res.status(400).send();
        }
    }

    async alterar(req, res) {
        try {
            const { id } = req.params;
            const { nome, telefone } = req.body;

            if (!new ContatoController().validarNome(nome)) {
                return res.status(400).send();
            }

            const contato = await Contato.findByPk(id);
            if (!contato) return res.status(404).send();

            await contato.update({ nome, telefone });
            return res.status(200).send(contato);
        } catch (error) {
            return res.status(400).send();
        }
    }

    async deletar(req, res) {
        try {
            const { id } = req.params;
            const contato = await Contato.findByPk(id);
            if (!contato) return res.status(404).send();

            await contato.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send();
        }
    }
}

module.exports = new ContatoController();