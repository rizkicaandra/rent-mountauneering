const router = require('express').Router();
const ItemController = require('../controllers/ItemController')

router.get('/', ItemController.itemGet);
router.get('/add', ItemController.itemAddGet);
router.post('/add', ItemController.itemAddPost);
router.get('/edit/:id', ItemController.itemEdit);
router.post('/edit/:id', ItemController.itemEditPost);
router.get('/delete/:id', ItemController.itemDelete);

module.exports = router;
