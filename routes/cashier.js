const router = require('express').Router();
const Cashiers = require('../controllers/cashier')

router.get('/register', Cashiers.registerForm);
router.post('/register', Cashiers.create);
router.get('/login', Cashiers.loginForm);
router.post('/login', Cashiers.login)

router.get('/', Cashiers.getAll)
router.get('/add', function(req, res){
    res.render('./cashier/cashier-input.ejs')
})
router.post('/add', Cashiers.addCashier)
router.get('/delete/:id', Cashiers.deleteCashier)
module.exports = router;