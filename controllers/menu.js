const Models = require("../models")
const MenuModels = Models.Menu

class MenuController{
    static getAll(req, res){
        MenuModels.findAll()
        .then(data =>{
            res.render('./menu/menu-all.ejs', {
                dataMenu: data
            })
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static addMenu(req, res){
        MenuModels.create({
            name: req.body.name,
            stock: req.body.stock,
            price: req.body.price
        })
        .then(data=>{
            res.redirect('/menus')
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static getDataById(req, res){
        MenuModels.findOne({
            where:{ id: req.params.id}
        })
        .then(data =>{
            res.render("./menu/menu-edit.ejs", {
                getDataEdit: data
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static updateData(req, res){
        MenuModels.update({
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price
            },{where :{id: req.params.id}
        })
        .then(data =>{
            res.redirect("/menus")
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static deleteData(req, res){
        MenuModels.destroy({
            where:{ id: req.params.id}
        })
        .then(data =>{
            res.redirect("/menus")
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = MenuController