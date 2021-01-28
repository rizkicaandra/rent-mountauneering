const { User } = require('../models/index')

class Controller {
    static homeGet(req, res) {
        res.render('home')
    }

    static login(req, res){
        res.render('login')
    }

    static loginPost(req, res){
        let email = req.body.email
        let password = req.body.password

        User.findAll({
            where:[
                {email: email},{password:password}
            ]
        })
        .then( data => {
            // console.log(data)
            req.session.roleUser = data[0].role
            // console.log(req.session.userRentId);
            res.redirect('/')
        })
        .catch( err => {
            console.log(err)
            res.send('Login gagal')
        })

    }

    static logout(req, res){
        req.session.destroy( (err) => {
            res.redirect('/login')
        })
    }

}

module.exports = Controller;