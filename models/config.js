const { Sequelize } = require('sequelize')

module.exports = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})