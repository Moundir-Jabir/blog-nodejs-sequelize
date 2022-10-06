const { Avis } = require('../models/Avis')
const sequelize = require('sequelize')

exports.adminUpdateRate = (req,res) => {
    res.render('./admin/update-rate' ,{
        layout: 'admin'
    })
}

exports.getAvis = (req, res) => {
    Avis.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}

exports.getAvisByPost = (id) => {
    return Avis.findAll({ 
        where:  {articleId: id},
        raw: true,
        nest: true,
        attributes: [[sequelize.fn('avg', sequelize.col('avis_number')), 'avgRates']]
    })
}

exports.createAvis = (req, res, id) => {
    const avis = {
        username: req.body.username,
        avis_number: req.body.avisNumber,
        articleId: req.params.idPost
    }
    Avis.create(avis)
        .then(data => {
            res.redirect('/'+avis.articleId)
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Something went wrong."
            })
        })
}