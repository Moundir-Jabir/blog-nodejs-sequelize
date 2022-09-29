const { DataTypes } = require('sequelize')
const db = require('./config')

const Commentaire = db.define('commentaire', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
module.exports = { Commentaire }