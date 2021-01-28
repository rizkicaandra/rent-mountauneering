const { Item } = require('../models/index')

class ItemController {
    static itemGet(req, res) {
        Item.findAll()
            .then(data => {
                res.render('showItems', { items: data });
            })
            .catch(err => {
                console.log(err)
                res.send(err);
            })
    }

    static itemAddGet(req, res) {
        res.render('addItem')
    }

    static itemAddPost(req, res) {
        const { name, stock } = req.body;
        const newItem = {
            name,
            stock
        };
        Item.create(newItem)
            .then(data => {
                res.redirect('/items');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static itemEdit(req, res) {
        const { id } = req.params;
        Item.findAll({
            where: {
                id: id
            }
        })
            .then(item => {
                res.render('editItem', { id, item: item[0] })
            })
            .catch(err => {
                res.send(err);
            })
    }

    static itemEditPost(req, res) {
        const { id } = req.params;
        const { name, stock } = req.body;
        const updatedItem = {
            name,
            stock
        }
        Item.update(updatedItem, { where: { id } })
            .then(data => {
                res.redirect('/items');
            })
            .catch(err => {
                res.send(err);
            })
    }

    static itemDelete(req, res) {
        const { id } = req.params;
        Item.destroy({
            where: {
                id: id
            }
        })
            .then(data => {
                res.redirect('/items');
            })
            .catch(err => {
                res.send(err);
            })
    }
}
module.exports = ItemController;
