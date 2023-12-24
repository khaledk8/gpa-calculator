//const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const path = require('path');

const db = require('./util/database');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const staffRoutes = require('./Routes/staff');
const sysadminRoutes = require('./Routes/sysadmin');
const userRoutes = require('./Routes/User');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir,'pages')));

app.use(staffRoutes);
app.use(sysadminRoutes);
app.use(userRoutes);


app.get('/', (req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','login.html'));
    //next(); //allows request to continue to next middleware in line
});

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
   //allows request to continue to next middleware in line
});

//const server = http.createServer(app);

app.listen(3000);