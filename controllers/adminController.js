exports.getAddUser = (req, res, next) => {
    res.render('admin.ejs', )}

exports.postAddUser = (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
}