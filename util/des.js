const crypto = require("crypto");
const algorithm = "des-ecb";
const fs = require('fs')
const path = require('path')

function readDESKeyFromFile(filePath) {
    const absolutePath = path.resolve(filePath);
    try {
        const desKey = fs.readFileSync(absolutePath, 'utf8').trim();
        return desKey;
    } catch (error) {
        console.error("Error reading the DES key file:", error);
        return null; 
    }
}


const desKey = readDESKeyFromFile('./deskey');

const DES_KEY = 'aswefsdf';

const key = Buffer.from(DES_KEY, "hex");

class Des {
    static async encrypt(text) {
        if (text != null) {
            const cipher = crypto.createCipheriv(algorithm, key, null);
            let encrypted = cipher.update(text, "utf8", "hex");
            encrypted += cipher.final("hex");
            return encrypted;
        }
        return null;
    }
    static async dencrypt(encrypted) {
        try {
            if (encrypted != null) {
                const decipher = crypto.createDecipheriv(algorithm, key, null);
                let decrypted = decipher.update(encrypted, "hex", "utf8");
                decrypted += decipher.final("utf8");
                return decrypted;
            }
            return encrypted;
        } catch {
            return encrypted;
        }
    }
}