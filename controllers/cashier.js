const Cashier = require('../models').Cashier
const bcrypt = require('bcryptjs');
const session = require('express-session')



class CashierController {
  static getAll(req, res){
    Cashier.findAll()
    .then(data =>{
        // res.send(data)
        res.render("./cashier/cashier-all.ejs", {
            dataCashier: data
        })
    })
    .catch(err =>{
        res.send(err)
    })
}
static addCashier(req, res){
    //res.send(req.body)
    Cashier.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(data =>{
        res.redirect("/cashiers")
    })
    .catch(err =>{
        res.send(err)
    })
}
static deleteCashier(req, res){
    Cashier.destroy({
        where:{ id: req.params.id}
    })
    .then(data =>{
        res.redirect("/cashiers")
    })
    .catch(err => {
        res.send(err)
    })
}

  static home(req, res) {
    res.render('./home.ejs')
  }

  static registerForm(req, res) {
    res.render('./cashiers/registerv2.ejs');
  }

  static create(req, res) {
    Cashier.create(req.body)
    .then(() => {
      res.redirect('/cashiers/login');
    })
    .catch(err => {
      // res.render('./cashiers/register.ejs', {
      //   err: err,
      //   alert: alert
      // });
      res.send(err.message);
    })
  }

  static loginForm(req, res) {
    res.render('./cashiers/login.ejs')
  }

  static login(req, res) {
    // res.send(req.body)
    // Cashier.findOne({
    //   where: {
    //     username: req.body.username
    //   }
    // })
    // .then(user => {
    //   const hash = bcrypt.hashSync(req.body.password, 10)
    //   if (!user) throw `Wrong username / Password`
    //   if (! bcrypt.compareSync(req.body.password, user.password)) throw `Wrong username / Password`
    //   else {
    //     res.send(req.session)
    //   }
    // })
    // .catch(err => {
    //   res.send(err)
    // })
 }
}

module.exports = CashierController;