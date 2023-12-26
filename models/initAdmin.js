const User = require('./User'); 
const sequelize = require('../util/db'); 

async function createAdmin() {
    try {
        await sequelize.sync(); 

        // Create an admin user
        const adminUser = await User.create({
            name: 'admin', 
            password: 'adminpassword', 
            role: 'admin'
        });

        console.log('Admin user created successfully:', adminUser);
    } catch (error) {
        console.error('Failed to create admin user:', error);
    }
}

createAdmin();