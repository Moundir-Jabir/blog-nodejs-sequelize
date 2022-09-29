const { DataTypes } = require('sequelize')
const db = require('./config')

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
// Category.hasMany(Articles);
// Articles.belongsTo(Category);
module.exports = { Articles }
