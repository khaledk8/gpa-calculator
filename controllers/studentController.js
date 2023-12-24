const Student = require('../models/Student');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');


const encryptWithPublicKey = (publicKey, data) => {
    const bufferData = Buffer.from(data);
    return crypto.publicEncrypt(publicKey, bufferData).toString("base64");
};

function readRSAKeyFromFile(filePath) {
    const absolutePath = path.resolve(filePath)
    try {
        const rsaKey = fs.readFileSync(absolutePath, 'utf8').trim();
        return rsaKey;
    } catch (error) {
        console.error("Error reading the RSA key file:", error);
        return null; 
    }
}



// Load your RSA public key
const publicKey = readRSAKeyFromFile('../util/rsakey.txt');

exports.viewRecord = async (req, res) => {
    const studentId = req.session.user.id;

    try {
        const student = await Student.findByPk(studentId);
        
        const encryptedGrades = student.grades.map(grade => {
            return {
                ...grade,
                letterGrade: encryptWithPublicKey(publicKey, grade.letterGrade)
            };
        });

        res.render('student', { student: { ...student.dataValues, grades: encryptedGrades } });
    } catch (error) {
        console.error('Error fetching student record:', error);
        res.status(500).send('Error fetching your record');
    }
};