
const gradePoints = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'F': 0.0
  };
  
  function calculateGPA(courseGrades) {
    let totalPoints = 0;
    let coursesCounted = 0;
  
    courseGrades.forEach(course => {
      if (course.letterGrade in gradePoints) {
        totalPoints += gradePoints[course.letterGrade];
        coursesCounted++;
      }
    });
  
    if (coursesCounted === 0) return 0 
    return totalPoints / coursesCounted
  }
  
  module.exports = calculateGPA;