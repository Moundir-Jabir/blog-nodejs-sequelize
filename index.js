const db = require('./models/config')
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { engine } = require('express-handlebars')
const { getarticles, getArticlebyid, getPostsByCategorie } = require('./controllers/articleController')
const { getCategorie } = require('./controllers/categorieController')
const path = require('path')

//Routers
const commentaireRouter = require('./routes/commentaire')
const categorieRouter = require('./routes/categorie');
const articleRouter = require('./routes/article')
const avisRouter = require('./routes/avis')

const categorieAdmin = require('./routes/admin');
const { getCommentsByPost } = require('./controllers/commentaireController')
const { getAvisByPost } = require('./controllers/avisController')

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
        db.sync().then(e => console.log('sync'))
            .catch(err => console.log(err))
    })
    .catch((error => console.error('Unable to connect to the database:', error)))

app.use(express.json())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    let categories = await getCategorie()
    let data = await getarticles()
    // let postsByCate = await getPostsByCategorie(req.params.id)
    res.render('index', {
        data, categories
    })
    console.log(data);
})
app.get('/:id', async (req, res) => {
    let categories = await getCategorie()
    let article = await getArticlebyid(req.params.id)
    let comments = await getCommentsByPost(req.params.id)
    let avis = await getAvisByPost(req.params.id)
    res.render('article', {
        article, categories, comments, avis
    })
})

app.use('/admin', categorieAdmin)
app.use('/commentaire', commentaireRouter)
app.use('/categorie', categorieRouter)
app.use('/article', articleRouter)
app.use('/avis', avisRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})