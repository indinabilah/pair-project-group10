const Models = require("../models")
const InvModels = Models.Invoice
const CusModels = Models.Customer
const CashModels = Models.Cashier
const OrderModels = Models.Order
const MenuModels = Models.Menu


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
            where:{
                CustomerId: req.params.id
            }
        })
        .then(dataCusOrder => {
            res.render("./transaksi/transaksi.ejs", {
                dataCusOrder
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getBill(req, res){
        OrderModels.findAll({
            where:{
                CustomerId: req.params.id
            }
        })
        .then(dataCus =>{
            OrderModels.findAll({
                where:{
                    //======= invoice
                }
            })
            res.render("./transaksi/transaksi.ejs", {

            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = InvoiceController