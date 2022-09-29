const { DataTypes } = require('sequelize')
const db = require('./config')

const Categorie = db.define('categorie', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
module.exports = { Categorie }