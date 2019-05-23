const router = require('express').Router()
const menu = require("../controllers/menu")

router.get('/', menu.getAll)
router.get('/add', function(req, res){
    res.render('./menu/menu-input.ejs')
})
router.post('/add', menu.addMenu)
router.get('/edit/:id', menu.getDataById)
router.post('/edit/:id', menu.updateData)
router.get('/delete/:id', menu.deleteData)

module.exports = router