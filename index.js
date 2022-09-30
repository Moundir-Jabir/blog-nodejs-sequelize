const db = require('./models/config')
const express = require('express')
const app = express()
require('dotenv').config()

//Routers
const commentaireRouter = require('./routes/commentaire')
const categorieRouter = require('./routes/categorie');

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
        db.sync().then(e => console.log('sync'))
            .catch(err => console.log(err))
    })
    .catch((error => console.error('Unable to connect to the database:', error)))

app.use(express.json())

app.use('/commentaire', commentaireRouter)
app.use('/categorie', categorieRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})