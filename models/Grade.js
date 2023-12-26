const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');
const Student = require('./Student');




const SemesterGrades = sequelize.define('SemesterGrades', {
  semester: {
    type: DataTypes.STRING,
    allowNull: false
  },
});



SemesterGrades.belongsTo(Student);
Student.hasMany(SemesterGrades);

module.exports = SemesterGrades;