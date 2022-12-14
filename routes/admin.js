const express = require('express')
const router = express.Router()
const { adminCategorie, adminAddCategorie, Admindelete, adminUpdateCategorie } = require('../controllers/categorieController')
const { adminDashboard } = require('../controllers/dashboardController')
const { adminPosts, adminCreatePosts, adminGetPostById, adminUpdatePost, adminDeletePost } = require('../controllers/articleController')
const { adminAvisByPost, adminGetRateById, adminAvisUpdate, adminRemoveAvis } = require('../controllers/avisController')
const { adminGetCommentById, adminUpdateComment, adminRemoveComment } = require('../controllers/commentaireController')

router.get('/index', adminDashboard)
router.get('/posts', adminPosts)
router.get('/posts/add', adminCreatePosts)
router.get('/posts/details/delete/:id', adminDeletePost)
router.get('/posts/details/update/:id', adminUpdatePost)
router.get('/posts/details/:idPost', adminGetPostById)
//router.get('/posts/details/update-post', adminUpdatePost)
router.get('/posts/details/avis/:id', adminAvisByPost)
router.get('/posts/details/avis/update-avis/:idAvis', adminGetRateById)
router.post('/posts/details/avis/update-avis/:idAvis', adminAvisUpdate)
router.get('/posts/details/avis/remove-avis/:idAvis/:idPost', adminRemoveAvis)
router.get('/posts/details/update-comment/:idComment', adminGetCommentById)
router.post('/posts/details/update-comment/:idComment', adminUpdateComment)
router.get('/posts/details/remove-comment/:idComment/:idPost', adminRemoveComment)
router.get('/categories', adminCategorie)
router.get('/categorie/add', adminAddCategorie)
router.get('/categorie/delete/:id', Admindelete)
router.get('/categorie/update/:id', adminUpdateCategorie)

// Router Delete Data : 
module.exports = router;