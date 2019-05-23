const Models = require("../models")
const OrderModels = Models.Order
const MenuModels = Models.Menu
const CusModels = Models.Customer

class OrderController{
    static getMenu(req, res){
        MenuModels.findAll()
        .then(dataMenu =>{
            CusModels.findAll()
            .then(dataCus =>{
                res.render("./orders/menu-for-customer.ejs", {
                    dataMenu,
                    dataCus
                })
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static addOrder(req, res){
        OrderModels.create({
            CustomerId: req.body.CustomerId,
            MenuId: req.body.MenuId,
            quantity: req.body.quantity,
        })
        .then(data=>{
            res.redirect("/orders/add/list")
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static getAll(req, res){
        OrderModels.findAll()
        .then(data =>{
            res.render("./transaksi/list-order.ejs", {
                dataOrder: data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
}
module.exports = OrderController