const { Avis } = require('../models/Avis')

exports.getAvis = (req, res) => {
    Avis.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}