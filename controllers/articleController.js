const { Articles } = require('../models/Articles')
const { Categorie } = require('../models/Categorie')

exports.getarticles = () => {
  return Articles.findAll({
    raw: true,
    nest: true,
    include: Categorie
  })
}

exports.create = (req, res) => {
  console.log(req.body)
  Articles.create(req.body)
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
}