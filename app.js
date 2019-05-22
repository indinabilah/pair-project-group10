const express = require('express');
const app = express();
const port = 3000;
const customer = require('./routes/customer');
const cashier = require('./routes/cashier');

//route for static files
app.use(express.static('views'));

//parsing form url-encoded
router.use(express.urlencoded({ extended: false }));

//routes
app.use('/customers', customer);
app.use('/cashiers', cashier);


app.listen(port, () => console.log(`Application started at port: ${port}`))