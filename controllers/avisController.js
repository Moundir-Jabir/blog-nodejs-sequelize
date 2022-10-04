const { Avis } = require('../models/Avis')

exports.adminUpdateRate = (req,res) => {
    res.render('./admin/update-rate' ,{
        layout: 'admin'
    })
}

exports.getAvis = (req, res) => {
    Avis.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}