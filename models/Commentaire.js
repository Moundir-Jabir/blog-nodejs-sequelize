const { DataTypes } = require('sequelize')
const db = require('./config')
const { Articles } = require('./Articles')

let Commentaire = db.define('Commentaire', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenue: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
Articles.hasMany(Commentaire);
Commentaire.belongsTo(Articles);
module.exports = { Commentaire }