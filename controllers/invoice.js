const Models = require("../models")
const InvModels = Models.Invoice
const CusModels = Models.Customer
const CashModels = Models.Cashier
const OrderModels = Models.Order
const MenuModels = Models.Menu

const Cashier = require('../models').Cashier


class InvoiceController{
    static getAll(req, res){
        CusModels.findAll()
        .then(dataCus => {
            res.render("./transaksi/transaksi.ejs", {
                dataCus
            })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getFindByCus(req, res){
        OrderModels.findAll({
            
            where: {
                CustomerId: req.params.id
            },
            include: [{
                model: MenuModels
            }]
        })
        .then(dataCusOrder => {
            
           dataCusOrder = dataCusOrder.map(value => value.dataValues)
                        .map(value => {
                            value.totalPrice = value.quantity * value.Menu.price
                            
                            return value;
                        })
                
            let sum = 0
            for (let i = 0; i < dataCusOrder.length; i++) {
                console.log(dataCusOrder[i].totalPrice + sum)
                sum += +dataCusOrder[i].totalPrice
            }

            InvModels.create({
                CustomerId: dataCusOrder[0].CustomerId,
                CashierId: null,
                bill: sum,
                createdAt: new Date,
                updatedAt: new Date
            })
            // res.send(dataCusOrder);
            
        })
        .then (() => {
            res.redirect('/cashiers/')
        })
        .catch(err => {
          res.send(err);
        })
      
    }

    static getBill(req, res){
        OrderModels.findAll({
            where:{
                CustomerId: req.params.id
            }
        })
        .then(dataCus =>{
            res.send(dataCus)
            // OrderModels.findAll({
            //     where:{
            //         //======= invoice
            //     }
            // })
            // res.render("./transaksi/transaksi.ejs", {

            // })
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = InvoiceController