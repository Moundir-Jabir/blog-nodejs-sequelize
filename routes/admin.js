const express = require('express')
const router = express.Router()
const {  adminCategorie } = require('../controllers/categorieController')
const { adminAddCategorie } = require('../controllers/categorieController')

router.get('/categories', adminCategorie)
router.get('/categorie/add', adminAddCategorie)
module.exports = router