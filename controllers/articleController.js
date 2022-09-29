const { Article } = require('../models/articles')

exports.getarticles = (req, res) => {
    Article.findAll().then(data => res.json({data}))
        .catch(err => res.status(400).json({err}))
      
            const  Article = {
               title: req.body.title,
               image:req.body.image,
               content: req.body.content
            };
            Article.createArticle(article).then(data =>{
               res.send(data);
            }).catch(err =>{
              console.log("error");
            })
            }




