const { Sequelize } = require('sequelize')

module.exports = new Sequelize('blog-nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    
})