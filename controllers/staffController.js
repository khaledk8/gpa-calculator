// staffController.js

const Student = require('../models/Student');
const { Des } = require('../util/des'); 

exports.dashboard = (req, res) => {
    res.render('staff'); 
};

exports.viewRecords = async (req, res) => {
    try {
       
        const students = await Student.findAll();
        const decryptedStudents = students.map(student => {
            return {
                ...student.dataValues,
               
                record: Des.decrypt(student.record)
            };
        });
        res.render('staff', { students: decryptedStudents });
    } catch (error) {
        console.error('Error fetching student records:', error);
        res.status(500).send('Error fetching records');
    }
};

exports.editRecord = async (req, res) => {
    const { studentName, course, grade } = req.body;
    try {
     
        const encryptedGrade = await Des.encrypt(grade);

        await Student.update({ course, record: encryptedGrade }, {
            where: { name: studentName }
        });
        res.redirect('/staff');
    } catch (error) {
        console.error('Error updating record:', error);
        res.status(500).send('Error updating record');
    }
};