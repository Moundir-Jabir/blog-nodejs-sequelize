const { Articles } = require('../models/Articles')
const { Avis } = require('../models/Avis')
const { Categorie } = require('../models/Categorie')
const { Commentaire } = require('../models/Commentaire')
const sequelize = require('sequelize')

exports.getArticlebyid = (id) => {
  return Articles.findByPk(id,
    {
      raw: true,
      nest: true,
      include: Categorie
    })
  
}

const getarticles = exports.getarticles = () => {
  return Articles.findAll({
    raw: true,
    nest: true,
    include: Categorie
  })
}

exports.adminPosts = async (req, res) => {
  let posts = await getarticles()
  res.render('./admin/posts', {
    posts,
    layout: 'admin'
  })
}

exports.adminCreatePosts = async (req, res) => {
  const Category = await Categorie.findAll(
    {
      raw: true,
      nest: true,
    })

  res.render('./admin/add-post', {
    Category,
    layout: 'admin'
  })

}

// exports.adminGetPostById = async (req, res) => {
//   const id = req.params.id;
//   const comments = await Commentaire.findAll({
//     where: { articleId: id },
//     raw: true,
//     nest: true,
//   })

//   const avis = await Avis.findAll({
//     where: { articleId: id },
//     raw: true,
//     nest: true,
//   })

//   const article = await Articles.findByPk(id,
//     {
//       raw: true,
//       nest: true,
//     })

//   res.render('./admin/post-detail', {
//     article, comments, avis,
//     layout: 'admin'
//   })
// }

exports.adminDeletePost = (req, res) => {
  const id = req.params.id;

  Articles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/./admin/posts');
      } else {
        res.send({
          message: `Cannot delete post with id=${id}. Maybe post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete post with id=" + id
      });
    });
}

exports.adminUpdatePost = async (req, res) => {
  const id = req.params.id;
  const Category = await Categorie.findAll(
    {
      raw: true,
      nest: true,
    })
  const article = await Articles.findByPk(id,
    {
      raw: true,
      nest: true,
    })

  res.render('./admin/update-post', {
    Category,
    article,
    layout: 'admin'
  })

}

exports.create = async (req, res) => {
  const posts = {
    title: req.body.title,
    image: req.body.image,
    categorieId: req.body.category,
    content: req.body.content,
    content2: req.body.content2,
    content3: req.body.content3

  };

  Articles.create(posts)
    .then(data => {
      res.redirect('/admin/posts'), {

      }

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      })
    })
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id)
  const posts = {
    title: req.body.title,
    image: req.body.image,
    categorieId: req.body.category,
    content: req.body.content,
    content2: req.body.content2,
    content3: req.body.content3

  };
  Articles.update(posts, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/./admin/posts')
      } else {
        res.send({
          message: `Cannot update this post with id=${id}. Maybe post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating post with id=" + id
      });
    });
};

exports.adminGetPostById = async (req, res) => {
  const id = req.params.idPost
  const comments = await Commentaire.findAll({
    where: { articleId: id },
    raw: true,
    nest: true,
  })

  const avis = await Avis.findAll({
    where: { articleId: id },
    raw: true,
    nest: true,
    attributes: [[sequelize.fn('avg', sequelize.col('avis_number')), 'avgRates']]
  })

  const article = await Articles.findByPk(id,
    {
      raw: true,
      nest: true,
    })

  res.render('./admin/post-detail', {
    article, comments, avis,
    layout: 'admin'
  })
  console.log(avis)
}