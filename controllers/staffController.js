// staffController.js

const Student = require('../models/Student')
const { Des } = require('../util/des')
const fs = require('fs')
const path = require('path')

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


exports.updateDESKey = async (req, res) => {
    const { newDESKey } = req.body;

    try {
        // Validate the new key...

        // Update the DES key in your storage (e.g., write to a file)
        fs.writeFileSync(path.resolve('../util/deskey'), newDESKey, 'utf8');

        res.send('DES key updated successfully');
    } catch (error) {
        console.error('Error updating DES key:', error);
        res.status(500).send('Error updating DES key');
    }
};

exports.updateRSAKey = async (req, res) => {
    const { newRSAPublicKey, newRSAPrivateKey } = req.body;

    try {
       
        fs.writeFileSync(path.resolve('../util/rsakey'), newRSAPublicKey, 'utf8');
      

        res.send('RSA keys updated successfully');
    } catch (error) {
        console.error('Error updating RSA keys:', error);
        res.status(500).send('Error updating RSA keys');
    }
};