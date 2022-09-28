const { DataTypes } = require('sequelize')
const db = require('./config')

const Category = db.define('Categorie', {
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
module.exports = { Category }