const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./util/db')

const adminRoutes = require('./routes/admin')
const mainRoute = require('./routes/main')
const staffRoutes = require('./routes/staff')
const studentRoutes = require('./routes/student')

const User = require('./models/User');
const Student = require('./models/Student');
const Grade = require('./models/Grade');

const errorController = require('./controllers/error')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoute)
app.use(adminRoutes)
app.use(staffRoutes)
app.use(studentRoutes)

app.use(errorController.get404)

const session = require('express-session');

app.use(session({
  secret: 'ppwperoooo', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: !true } 
}));


sequelize.sync({ alter: true }).then(() => {
    console.log("All models were synchronized successfully.");
  }).catch(error => {
    console.error('Unable to synchronize the database:', error);
  });

app.listen(3000)
