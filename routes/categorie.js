const { application } = require('express')
const express = require('express')
const router = express.Router()
const { getCategorie , create , Admindelete } = require('../controllers/categorieController')

// Router Create:
router.post('/create' , create)

// Router Get Data:
router.get('/', getCategorie)






module.exports = router;