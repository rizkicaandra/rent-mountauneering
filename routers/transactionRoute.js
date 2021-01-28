const router = require('express').Router();
const TransactionController = require('../controllers/TransactionController');

router.get('/add/:id', TransactionController.addRentItemGet)

router.post('/add/:id', TransactionController.addRentItemPost )

router.get('/showrent', TransactionController.showRentGet)

router.get('/showrent/detail/:id', TransactionController.showRentDetailGet)

router.post('/showrent/done', TransactionController.rentDone)

module.exports = router;
