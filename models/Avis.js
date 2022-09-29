const { DataTypes } = require('sequelize')
const db = require('./config')

const Avis = db.define('Avis', {
    avis_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avis_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
// Article.hasMany(Avis)
module.exports = { Avis }