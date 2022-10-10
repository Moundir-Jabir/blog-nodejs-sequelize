const { Articles } = require('../models/Articles')
const { Categorie } = require('../models/Categorie')
const { Avis } = require('../models/Avis')
const { Commentaire } = require('../models/Commentaire')
const sequelize = require('sequelize')

exports.adminDashboard = async (req,res) => {
    const posts = await Articles.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('*')), 'allPosts']],
        raw: true,
        nest: true
    })
    const categories = await Categorie.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('*')), 'allCategories']],
        raw: true,
        nest: true
    })
    const avis = await Avis.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('*')), 'allAvis']],
        raw: true,
        nest: true
    })
    const comments = await Commentaire.findAll({
        attributes: [[sequelize.fn('count', sequelize.col('*')), 'allComments']],
        raw: true,
        nest: true
    })
    res.render('./admin/index' ,{
        layout: 'admin',
        posts,
        comments,
        avis,
        categories,
        page: 'Dashboard',
        activeDashboard: 'active'
    })
}