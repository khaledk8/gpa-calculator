const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const mainRoute = require('./routes/main')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes)
app.use(mainRoute)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})


app.listen(3000)
