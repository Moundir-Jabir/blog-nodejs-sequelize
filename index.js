const db = require('./models/config')
const express = require('express')
const app = express()
require('dotenv').config()

//Routers
const categoryRouter = require('./routes/category')

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
        db.sync().then(e => console.log('sync'))
            .catch(err => console.log(err))
    })
    .catch((error => console.error('Unable to connect to the database:', error)))

app.use(express.json())
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My first app',
        content: 'lorem ipsum'
    })
})
app.use('/category', categoryRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})