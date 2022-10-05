const { Commentaire } = require('../models/Commentaire')

exports.adminUpdateComment = (req,res) => {
    res.render('./admin/update-comment' ,{
        layout: 'admin'
    })
}

exports.createComment = (req, res, id) => {
    const comment = {
        username: req.body.username,
        contenue: req.body.contenue,
        articleId: req.params.idPost
    }
    Commentaire.create(comment)
        .then(data => {
            res.redirect('/'+comment.articleId);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Something went wrong."
            })
        })
}

exports.getCommentsByPost = (id) => {
    return Commentaire.findAll({ 
        where:  {articleId: id},
        raw: true,
        nest: true
    })
}
