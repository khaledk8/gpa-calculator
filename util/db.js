const Sequelize = require('sequelize')

const sequelize = new Sequelize('gpa-db', 'root', 'mypassword', {dialect:'mysql', host:'localhost'})

sequelize.authenticate().then(function(errors) { console.log(errors) });
module.exports = sequelize