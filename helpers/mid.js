const mid = (req, res, next) => {
    if(req.session.roleUser == 'Super Admin'){
        next()
    } else {
        res.redirect('/login')
    }

}

module.exports = mid