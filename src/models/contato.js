const database = require('../config/database');

class Contato {
    constructor() {
        this.model = database.db.define('contatos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            telefone: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        }, {
            timestamps: false
        });
    }
}

module.exports = (new Contato).model;