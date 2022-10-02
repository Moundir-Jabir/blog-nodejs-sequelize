const { Categorie } = require('../models/categorie')

exports.getCategorie = (req, res) => {
    return Categorie.findAll(
        {
            raw: true,
            nest: true,
        }
    )
}