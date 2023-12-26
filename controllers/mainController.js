const bcrypt = require('bcrypt');
const User = require('../models/User'); 
let urole
exports.loginUser = async (req, res, next) => {
    const { name, password } = req.body;

    try {
        
        const user = await User.findOne({ where: { name } });

        if (user && compareSync(password, user.password)) {
           urole = user.role
            switch(user.role) {
                case 'admin':
                    res.redirect('/admin');
                    break;
                case 'staff':
                    res.redirect('/staff');
                    break;
                case 'student':
                    res.redirect('/student');
                    break;
                default:
                    console.error(name);
                    res.status(401).send('Unauthorized: No valid role assigned');
                    break;
            }
        } else {
            res.status(401).send('Login failed: Incorrect username or password');
        }
    } catch (error) {
        console.error('Login error:', error);
        console.log(urole);
        res.status(500).send('An error occurred during login');
    }
};


exports.logoutUser = (req, res, next) => {
   
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).send('Could not log out, please try again');
            } else {
                res.redirect('/login');
            }
        });
    } else {
        res.redirect('/login');
    }
};


exports.getUser = (req, res, next) => {
    res.render('login')
    
}