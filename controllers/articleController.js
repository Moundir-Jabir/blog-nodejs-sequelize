const { Articles } = require('../models/Articles')
const { Categorie } = require('../models/Categorie')
const { Avis } = require('../models/Avis')
const { Commentaire } = require('../models/Commentaire')
const sequelize = require('sequelize')

exports.adminPosts = async (req,res) => {
  const ar = await Articles.findAll({
    raw: true,
    nest: true
  })
  res.render('./admin/posts' ,{
      layout: 'admin',
      ar
  })
  console.log(ar)
}
exports.adminCreatePosts = (req,res) => {
  res.render('./admin/add-post' ,{
      layout: 'admin'
  })
}
exports.adminGetPostById = (req,res) => {
  res.render('./admin/post-detail' ,{
      layout: 'admin'
  })
}
exports.adminUpdatePost = (req,res) => {
  res.render('./admin/update-post' ,{
      layout: 'admin'
  })
}
exports.getarticles = () => {
  return Articles.findAll({
    raw: true,
    nest: true,
    include: Categorie
  })
}

exports.create = (req, res) => {
  // console.log(req.body)
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

// exports.getArticlebyid = async(req, res) =>{
//   const id = req.params.id;
//   let categories = await getCategorie()
//   let articles = await getarticles()
//   res.render('index', {
//       articles,categories
//   })
// }

exports.getArticlebyid = (id) => {
  return Articles.findByPk(id,
    {
      raw: true,
      nest: true,
      include: Categorie
    })
  
}

exports.adminGetPostById = async(req,res) => {
  const id = req.params.idPost
  const comments = await Commentaire.findAll({
    where: {articleId : id},
    raw: true,
    nest: true,
  })

  const avis = await Avis.findAll({
    where: {articleId : id},
    raw: true,
    nest: true,
    attributes: [[sequelize.fn('avg', sequelize.col('avis_number')), 'avgRates']]
  })

  const article = await Articles.findByPk(id,
    {
      raw: true,
      nest: true,
    })
 
    res.render('./admin/post-detail' ,{
      article, comments, avis,
      layout: 'admin'
    })
    console.log(avis)
}