const express = require('express')
const router = express.Router()
const {  adminCategorie ,adminAddCategorie , Admindelete, adminUpdateCategorie} = require('../controllers/categorieController')

router.get('/categories', adminCategorie)
router.get('/categorie/add', adminAddCategorie)
router.get('/categorie/delete/:id', Admindelete)
// Router Delete Data : 
module.exports = router;