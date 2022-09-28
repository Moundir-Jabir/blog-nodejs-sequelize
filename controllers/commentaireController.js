const { Commentaire } = require('../models/Commentaire')

exports.getCommentaires = (req, res) => {
    Commentaire.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}