const { Categorie } = require('../models/categorie')

exports.getCategorie = (req, res) => {
    Categorie.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}