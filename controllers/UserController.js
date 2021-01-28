const {User} = require('../models/index')

class UserController {

    static userGet(req, res){

        User.viewAllData()
            .then( data => {
                res.render('showUsers', {users: data})
            })
            .catch( err => {
                res.send(err)
            })
    }

    static userAddGet(req,res){

        res.render('addUser')
    }

    static userAddPost(req, res){
        
        let newUser = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            identityNumber: req.body.identityNumber,
            role: req.body.role,
            password: req.body.password
        }

        User.create(newUser)
            .then( data => {
                res.redirect('/users')
            })
            .catch( err => {

            })
    }

    static userEdit(req, res){
        let editedId = req.params.id

        User.findByPk(editedId)
            .then( data => {
                res.render('editUser',{ user: data })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static userEditPost(req, res){
        let editedId = req.params.id

        let editedUser = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            identityNumber: req.body.identityNumber,
            role: req.body.role,
        }

        User.update(
            editedUser,{
            where:{
                id: editedId
            }
        })
        .then( data => {
            res.redirect('/users')
        })
        .catch( err => {
            res.send(err)
        })

    }

    static userEditPassword(req, res){
        let editedId = req.params.id

        User.findByPk(editedId)
            .then( data => {
                res.render('editChangePassword', { user: data })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static userEditPasswordPost(req, res){
        let editedId = req.params.id

        let editedUser = {
            password: req.body.password
        }

        User.update(
            editedUser,{
            where:{
                id: editedId
            }
        })
        .then( data => {
            res.redirect('/users')
        })
        .catch( err => {
            res.send(err)
        })

    }

    static userDelete(req, res){
        let deletedId = req.params.id

        User.destroy({
            
            where: {
                id: deletedId
            }

            })
            .then( data => {
                res.redirect('/users')
            })
            .catch( err => {
                res.send(err)
            })
    }


}

module.exports = UserController;