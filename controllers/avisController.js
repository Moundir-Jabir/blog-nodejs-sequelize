const { Avis } = require('../models/Avis')
const sequelize = require('sequelize')

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

exports.adminAvisByPost = (req, res) => {
    const id = req.params.id
    Avis.findAll({ 
        where:  {articleId: id},
        raw: true,
        nest: true,
    })
        .then(data => {
            res.render('./admin/avis', {
                layout: 'admin',
                data,
                page: 'Avis',
                activePosts: 'active'
            })
            // console.log(data)
        })
        .catch(err => {
            res.send({
            message:
                err.message || "Something went wrong."
            })
        })
}

exports.createAvis = (req, res) => {
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

exports.adminGetRateById = async (req,res) => {
    const id = req.params.idAvis
    const avis = await Avis.findByPk(id, {
        raw: true,
        nest: true
    })

    res.render('./admin/update-rate' ,{
        layout: 'admin',
        avis,
        page: 'Update Avis',
        activePosts: 'active'
    })
    // console.log(avis)
}

exports.adminAvisUpdate = (req, res) => {
    const id = req.params.idAvis
    const avis = {
        avis_number: req.body.numberOfStars
    }
    Avis.update(avis, {
        where: {avis_id: id}
    })
        .then(data => {
            res.redirect('/./admin/posts/details/avis/'+req.body.articleId)
        })
        .catch(err => {
            res.send({
                message: 'something went wrong' + err
            })
        })
}

exports.adminRemoveAvis = (req, res) => {
    const id = req.params.idAvis
    const postId = req.params.idPost
    Avis.destroy({
        where: {avis_id: id}
    })
        .then(data => {
            // res.send('avis deleted')
            res.redirect('/./admin/posts/details/avis/'+postId)
        })
        .catch(err => {
            res.send({
                message: 'something went wrong' + err
            })
        })
}