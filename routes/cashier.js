const router = require('express').Router();
const Cashiers = require('../controllers/cashier')

router.get('/login', (req, res) => {
  res.send('./cashiers/login.ejs')
})
module.exports = router;