const Cashier = require('../models').Cashier
const Invoice = require('../models').Invoice
const toRp = require('../helpers/digitgroup')
const bcrypt = require('bcryptjs');

class CashierController {

  static home(req, res) {
    res.redirect('/cashiers/invoices');
  }

  static registerForm(req, res) {
    res.render('./cashiers/register.ejs');
  }

  static create(req, res) {
    Cashier.create(req.body)
    .then(() => {
      res.redirect('/cashiers/list');
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
      if (!user) throw `Wrong username / Password`
      if (! bcrypt.compareSync(req.body.password, user.password)) throw `Wrong username / Password`
      else {
        req.session.user = req.body.username
        res.redirect('/cashiers')
      }
    })
    .catch(err => {
      res.send(err)
    })
 }

 static logout(req, res) {
   req.session.destroy();
   res.redirect('/')
 }

 static list(req, res) {
   Cashier.findAll()
   .then(data => {
     res.render('./cashiers/cashiers-all.ejs', {
       dataCashiers: data
     })
   })
   .catch(err => {
     res.send(err);
   })
 }

 static updatePwdForm(req, res) {
   Cashier.findByPk(req.params.id)
   .then(data => {
     res.render('./cashiers/cashiers-edit.ejs', {
       dataCashiers: data
     })
   })
   .catch(err => {
     res.send(err)
   })
 }

 static updatePwd(req, res) {
  Cashier.findByPk(req.params.id)
  .then(data => {
    data.password = req.body.password
    data.save()
  })
  .then(() => {
    res.redirect('/cashiers')
  })
  .catch(err => {
    res.send(err)
  })
 }

 static delete(req, res) {
   Cashier.destroy({
     where: {
       id: req.params.id
     }
   })
   .then(() => {
     res.redirect('/cashiers/list')
   })
   .catch(err => {
     res.send(err)
   })
 }

 static listInvoice(req, res) {
   Invoice.getUnassignedInvoice()
   .then(data => {
     res.render('./cashiers/cashier-invoices.ejs', {
       dataInvoices: data,
       toRp: toRp
     })
   })
   .catch(err => {
     res.send(err)
   })
 }

 static addInvoice(req, res) {
   //console.log('11111')
   Cashier.findOne({
     where: {
       username: req.session.user
     }
   })
   .then(data => {
     //res.send(data)
     Invoice.update({
       CashierId: data.id
     }, {
       where: {
         id: req.params.id
       }
     })
   })
   .then(() => {
     res.redirect('/cashiers/invoices')
   })
   .catch(err => {
     res.send(err)
   })
 }
}

module.exports = CashierController;