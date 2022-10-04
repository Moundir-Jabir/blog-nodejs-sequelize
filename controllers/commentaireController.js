const { Commentaire } = require('../models/Commentaire')

exports.adminUpdateComment = (req,res) => {
    res.render('./admin/update-comment' ,{
        layout: 'admin'
    })
}

exports.createComment = (req, res, id) => {
    Commentaire.create(req.body).then(e => res.json({ message: 'post created' }))
    .catch(err => res.status(400).json({err}))
}

exports.getCommentByPost = (req, res) => {
    console.log(req.params.id)
    Commentaire.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}
