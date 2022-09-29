const { Articles } = require('../models/Articles')


exports.getarticles = (req, res) => {
    Article.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))}
      
       
exports.create = (req, res) => {
  console.log(req.body)
    Articles.create(req.body)
     .then(data =>{
               res.send(data);
            }) .catch(err => {
               res.status(500).send({
                 message:
                   err.message || "Some error occurred while creating the Tutorial."
               });
             });
 }
