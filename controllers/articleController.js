const { Articles } = require('../models/Articles')
const { Avis } = require('../models/Avis')
const { Categorie } = require('../models/Categorie')
const { Commentaire } = require('../models/Commentaire')

const getarticles = exports.getarticles = () => {
  return Articles.findAll({
    raw: true,
    nest: true,
    include: Categorie
  })
}


exports.adminPosts = async(req,res) => {
  let posts = await getarticles()
  res.render('./admin/posts' ,{
    posts,
      layout: 'admin'
  })
}

exports.adminCreatePosts = (req,res) => {
  res.render('./admin/add-post' ,{
      layout: 'admin'
  })
}

exports.adminGetPostById = async(req,res) => {
  const id = req.params.id;
  const article = await Articles.findByPk(id,
    {
      raw: true,
      nest: true,
      include: Categorie,
      include: Commentaire,
      include: Avis
    })
 
    res.render('./admin/post-detail' ,{
      article,
      layout: 'admin'
      

    })

    console.log(article)
    
}







exports.adminUpdatePost = (req,res) => {
  res.render('./admin/update-post' ,{
      layout: 'admin'
  })
}


// exports.create = (req, res) => {
//   // console.log(req.body)
//   Articles.create(req.body)
//     .then(data => {
//       res.send(data);
//     }).catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// }




exports.create = (req, res) => {
        
  const posts = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content

  };
  Articles.create(posts)
    .then(data => {
      res.redirect('/admin/posts');
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      })
    })
};





const getArticlebyid = exports.getArticlebyid = (id) => {
  return Articles.findByPk(id,
    {
      raw: true,
      nest: true,
      include: Categorie
    })
  
};
