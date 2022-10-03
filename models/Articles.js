const { DataTypes } = require('sequelize')
const db = require('./config')
const { Categorie } = require('./Categorie')

const Articles = db.define('article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
  

}
)
Categorie.hasMany(Articles);
Articles.belongsTo(Categorie)
module.exports = { Articles }