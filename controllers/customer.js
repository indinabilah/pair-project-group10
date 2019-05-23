const Models = require("../models")
const CusModels = Models.Customer

class CustomerController{
    static getAll(req, res){
        CusModels.findAll()
        .then(data =>{
            // res.send(data)
            res.render("./customers/customer-all.ejs", {
                dataCustomers: data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static addCustomer(req, res){
        //res.send(req.body)
        CusModels.create({
            name: req.body.name,
            money: req.body.money
        })
        .then(data =>{
            res.redirect("/customers")
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static deleteCustomer(req, res){
        CusModels.destroy({
            where:{ id: req.params.id}
        })
        .then(data =>{
            res.redirect("/customers")
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = CustomerController