const { application } = require('express')
const express = require('express')
const router = express.Router()
const { getCategorie , create } = require('../controllers/categorieController')


router.post('/create' , create)
router.get('/', getCategorie)




module.exports = router;