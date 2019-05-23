const router = require('express').Router()
const Order = require("../controllers/order")

router.get('/', Order.getMenu)
router.post('/add', Order.addOrder)
router.get('/add/list', Order.getAll)

module.exports = router