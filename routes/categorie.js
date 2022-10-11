const express = require('express')
const router = express.Router()
const { getCategorie , create , update  } = require('../controllers/categorieController')

// Router Create:
router.post('/create' , create)
// Router Get Data:
router.get('/', getCategorie)

// Update a Tutorial with id
router.post("/update/:id", update);



module.exports = router;
