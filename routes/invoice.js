const router = require('express').Router()
const invoice = require("../controllers/invoice")

router.get('/', invoice.getAll)
router.get('/bayar/:id', invoice.getFindByCus)
router.get('/bayar/:id', invoice.getBill)
module.exports = router