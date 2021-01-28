const router = require('express').Router();
const UserController = require('../controllers/UserController')

router.get('/', UserController.userGet);

router.get('/add', UserController.userAddGet);

router.post('/add', UserController.userAddPost);

router.get('/edit/:id', UserController.userEdit);

router.post('/edit/:id', UserController.userEditPost);

router.get('/edit/password/:id', UserController.userEditPassword);

router.post('/edit/password/:id', UserController.userEditPasswordPost);

router.get('/delete/:id', UserController.userDelete);


module.exports = router;