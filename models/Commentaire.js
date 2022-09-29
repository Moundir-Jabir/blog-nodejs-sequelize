const { DataTypes } = require('sequelize')
const db = require('./config')
// const { Category } = require('./Category')

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
// Category.hasMany(Commentaire);
// Commentaire.belongsTo(Category);
module.exports = { Commentaire }