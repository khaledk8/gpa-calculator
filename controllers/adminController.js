const User = require('../models/User'); 
const { Des } = require('../util/des'); 




/* exports.postAddUser = (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
} */
exports.dashboard = (req, res) => {
    res.render('admin'); 
};


exports.createUser = async (req, res, next) => {
    const { username, password, role } = req.body;
    try {
        
        const encryptedPassword = await Des.encrypt(password);

        await User.create({
            username,
            password: encryptedPassword, 
            role
        });
        
        res.redirect('/admin');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
};

exports.deleteUser = async (req, res) => {
    const { username } = req.body;
    try {
        
        await User.destroy({
            where: { username }
        });
        
        res.redirect('/admin');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
};