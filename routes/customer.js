const router = require('express').Router()
const customer = require("../controllers/customer")

router.get('/customers', customer.getAll)
router.get('/customers/add', function(req, res){
    res.render('../views/customers/customer-input.ejs')
})
router.post('/customers/add', customer.addCustomer)
router.get('/customers/delete/:id', customer.deleteCustomer)

module.exports = router