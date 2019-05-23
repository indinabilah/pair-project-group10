const router = require('express').Router();
const Cashiers = require('../controllers/cashier')

router.get('/', (req, res, next) => {
  if (req.session.user) next()
  else res.redirect('/cashiers/login')
},Cashiers.home)

router.get('/register', (req, res, next) => {
  if (req.session.user === 'admin') next()
  else {
    res.status(403);
    res.render('./cashiers/403.ejs');
  }
},Cashiers.registerForm);

router.get('/list', (req, res, next) => {
  if (req.session.user === 'admin') next()
  else {
    res.status(403);
    res.render('./cashiers/403.ejs');
  } 
}, Cashiers.list)

router.get('/edit/:id',(req, res, next) => {
  if (req.session.user === 'admin') next()
  else {
    res.status(403);
    res.render('./cashiers/403.ejs')
  }
}, Cashiers.updatePwdForm)

router.post('/edit/:id', Cashiers.updatePwd)

router.get('/delete/:id', Cashiers.delete)
router.post('/register', Cashiers.create);
router.get('/login', (req, res, next) => {
  if(req.session.user) res.send(`You already logged in. Please logout first`)
  else next()
},Cashiers.loginForm);
router.post('/login', Cashiers.login);
router.get('/logout', Cashiers.logout)
module.exports = router;