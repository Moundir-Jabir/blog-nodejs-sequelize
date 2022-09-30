const { DataTypes } = require('sequelize')
const db = require('./config')
const { Articles } = require('./Articles')

const Commentaire = db.define('commentaire', {
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
module.exports = { Commentaire }