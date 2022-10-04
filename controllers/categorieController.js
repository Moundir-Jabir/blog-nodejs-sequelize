const { Categorie } = require('../models/Categorie')



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



  
    // Create a categorie
    exports.create = (req, res) => {
        
        const category = {
          name: req.body.name,
        };
      
        // Save Cate in the database
        Categorie.create(category)
          .then(data => {
            res.redirect('/admin/categories');
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            })
          })
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


