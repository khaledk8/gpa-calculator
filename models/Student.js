const { DataTypes } = require('sequelize');
const sequelize = require('../util/db'); 

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  
});

module.exports = Student;