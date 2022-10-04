const { log } = require('handlebars')
const { Categorie } = require('../models/categorie')



 const Categories = exports.getCategorie = (req, res) => {
    return Categorie.findAll(
        {
            raw: true,
            nest: true,
        }
    )
}
// Affichier les catégories 
exports.adminCategorie =  async(req, res) => {
   let categories = await Categories()
    res.render('./admin/categories', {
        categories,
        layout: 'admin'
    })
}

// rendre View Admin for add Categorie:
exports.adminAddCategorie = (req,res) => {
    res.render('./admin/add-category' ,{
        layout: 'admin'
    })
}


// rendre View Admin for Update Categories:

exports.adminUpdateCategorie = async (req,res) => {
  let id = req.params.id;
  let cat = await Categorie.findOne({id:id})
  let i = cat.name
  res.render('./admin/update-category' ,  { i , id,
        layout: 'admin'
  })
  console.log(i)
}  


    // Create a categorie
    exports.create = (req, res) => {
        
        const category = {
          name: req.body.name,
        };
      
        // Save Categorie in the database
        Categorie.create(category)
          .then(data => {
            res.redirect('/admin/categories');
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating this Categorie."
            })
          })
      };


      // U
      exports.update = (req, res) => {
        const id = req.params.id;
      
        Categorie.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.redirect('/admin/categories')
            } else {
              res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Tutorial with id=" + id
            });
          });
      };

      // delete a categorie : 
      exports.Admindelete = (req, res) => {
        const id = req.params.id;
      
        Categorie.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.redirect('/admin/categories');
            } else {
              res.send({
                message: `Cannot delete categorie with id=${id}. Maybe categorie was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Categorie with id=" + id
            });
          });
      };


      // update a categorie : 
      
  

