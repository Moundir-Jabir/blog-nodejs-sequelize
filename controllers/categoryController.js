const { Category } = require('../models/Category')

exports.createCategory = (req, res) => {
    Category.create(req.body).then(e => res.json({ message: 'post created' }))
    .catch(err => res.status(400).json({err}))
}

exports.getCategories = (req, res) => {
    Category.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
}