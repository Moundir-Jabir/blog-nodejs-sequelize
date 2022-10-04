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

// rendre View Admin:
exports.adminAddCategorie = (req,res) => {
    res.render('./admin/add-category' ,{
        layout: 'admin'
    })
}


  
    // Create a 
    exports.create = (req, res) => {
        
        // Create a Tutorial
        const category = {
          name: req.body.name,
        };
      
        // Save Tutorial in the database
        Categorie.create(category)
          .then(data => {
            res.redirect('/admin/categories');
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
      };





