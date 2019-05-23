const router = require('express').Router();
const Cashiers = require('../controllers/cashier')

router.get('/', Cashiers.home)
router.get('/register', Cashiers.registerForm);
router.post('/register', Cashiers.create);
router.get('/login', Cashiers.loginForm);
router.post('/login', Cashiers.login)
module.exports = router;