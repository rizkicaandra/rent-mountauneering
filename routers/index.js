const router = require('express').Router();
const Controller = require('../controllers/controller')
const itemRoute = require('./itemRoute');
const userRoute = require('./userRoute');
const transactionRoute = require('./transactionRoute')
const mid = require('../helpers/mid')


router.get('/', Controller.homeGet);
router.use('/items',mid, itemRoute);
router.use('/users',mid, userRoute);
router.use('/transactions',mid, transactionRoute);
router.get('/login', Controller.login)
router.post('/login', Controller.loginPost)
router.get('/logout', Controller.logout)


module.exports = router;