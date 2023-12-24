const { DataTypes } = require('sequelize');
const sequelize = require('../util/db');
const SemesterGrades = require('./SemesterGrades');

const CourseGrade = sequelize.define('CourseGrade', {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  letterGrade: {
    type: DataTypes.STRING,
    allowNull: false,
    // Validate the letter grade
    validate: {
      isIn: {
        args: [['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F']],
        msg: "Must be a valid letter grade"
      }
    }
  }
  
});

CourseGrade.belongsTo(SemesterGrades);
SemesterGrades.hasMany(CourseGrade);

module.exports = CourseGrade;