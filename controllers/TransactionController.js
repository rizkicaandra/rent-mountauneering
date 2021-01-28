const {User, Item, Transaction} = require('../models/index')
const {Op} = require('sequelize')
const addCustomer = require('../helpers/prefixcCustomer')

class TransactionController {

    static addRentItemGet(req,res){
        let selectedId = req.params.id
        let userData = null
        let itemsData = null

        User.findByPk(selectedId)
            .then( data => {
                userData = data

                return Item.findAll()
            })
            .then( data => {
                itemsData = data
                console.log(data)

                res.render('addRentTransaction', { userData, itemsData})
            })
            .catch( err => {
                res.send(err)
            })

    }

    static addRentItemPost(req,res){
        let rentId = req.params.id
        let newData = {
            ItemId: req.body.itemId,
            UserId: rentId,
            borrowedAmout: req.body.borrowedAmount,
            status: false,
            borrowDate: new Date()
        }

        console.log(newData)

        Item.findByPk(rentId,{
            where:{
                availability: {
                    [Op.gte]:req.body.borrowedAmount
                }
            }
        })
        .then( data => {
            
            return Transaction.create(newData)
        })
        .then( data => {

            return Item.decrement(['availability'],{ by: req.body.borrowedAmount, where: { id: rentId } })
        })
        .then( data => {

            res.redirect('/users')
        })
        .catch( err => {
            console.log(err)
            res.send('Stock Tidak tersedia')
        })
        
    }

    static showRentGet(req, res){

        User.findAll({
            include: Item,
        })
        .then(data => {
            // res.send(data)
            res.render('showRentUsers',{data})
        })
        .catch( err => {
            console.log(err)
            res.send(err)
        })

    }

    static showRentDetailGet(req, res){
        let selectedId = req.params.id

        User.findByPk(selectedId,{
            include: Item,
        })
        .then(data => {
            // res.send(data)
            res.render('showRentDetail',{data,addCustomer})
        })
        .catch( err => {
            console.log(err)
            res.send(err)
        })

    }

    static rentDone(req,res){

        Transaction.destroy({
            where:[{
                ItemId:req.body.item},
                {UserId:req.body.user}
            ]
        })
        .then( data => {
            return Item.increment(['availability'],{ by: req.body.jumlah, where: { id: req.body.item } })
        })
        .then(data => {
            // res.send(data)
            res.redirect('/transactions/showrent')
        })
        .catch( err => {
            console.log(err)
            res.send(err)
        })
    }

}

module.exports = TransactionController;