const { Article } = require('../models/articles')


exports.getarticles = (req, res) => {
    Article.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
      
       
// exports.createArticle = (req, res) => {
//          if (!req.body.title) {
//            res.status(400).send({
//              message: "Content can not be empty!"
//            });
//            return;
//          }// 
//      const  article = {
//                title: req.body.title,
//                image:req.body.image,
//                content: req.body.content
//             };
//     Article.createArticle(article)
//      .then(data =>{
//                res.send(data);
//             }) .catch(err => {
//                res.status(500).send({
//                  message:
//                    err.message || "Some error occurred while creating the Tutorial."
//                });
//              });
//  }}