const router = require('express').Router()
const menu = require("../controllers/menu")

router.get('/menus', menu.getAll)
router.get('/menus/add', function(req, res){
    res.render('../views/menu/menu-input.ejs')
})
router.post('/menus/add', menu.addMenu)
router.get('/menus/edit/:id', menu.getDataById)
router.post('/menus/edit/:id', menu.updateData)
router.get('/menus/delete/:id', menu.deleteData)

module.exports = router