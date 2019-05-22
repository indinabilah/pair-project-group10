const Cashier = require('../models').Cashier
const bcrypt = require('bcryptjs')


class CashierController {

  static registerForm(req, res) {
    res.render('./cashiers/register.ejs');
  }

  static create(req, res) {
    Cashier.create(req.body)
    .then(() => {
      res.redirect('/cashiers/login');
    })
    .catch(err => {
      res.send(err.message);
    })
  }

  static loginForm(req, res) {
    res.render('./cashiers/login.ejs')
  }

  static login(req, res) {
    //res.send(req.body)
    Cashier.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      const hash = bcrypt.hashSync(req.body.password, 10)
      if (!user) throw `Wrong username / Password`
      if (bcrypt.compareSync(req.body.password, user.password)) res.send(`Success`)
      else throw `Wrong username / Password`
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = CashierController;