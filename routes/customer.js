const router = require('express').Router()
const customer = require("../controllers/customer")

router.get('/', customer.getAll)
router.get('/add', function(req, res){
    res.render('./customers/customer-input.ejs')
})
router.post('/add', customer.addCustomer)
router.get('/delete/:id', customer.deleteCustomer)

module.exports = router