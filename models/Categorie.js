const { DataTypes } = require('sequelize')
const db = require('./config')

const Categorie = db.define('categorie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
)
module.exports = { Categorie }