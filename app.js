const express = require('express');
const app = express();
const port = 3000;
const customer = require('./routes/customer');
const cashier = require('./routes/cashier');
const menu = require('./routes/menu');

//parsing form url-encoded
app.use(express.urlencoded({ extended: false }));

//route for static files
app.use(express.static('views'));
app.use('/cashiers', cashier)
app.use('/customers', customer)
app.use('/menus', menu)

app.listen(port, () => console.log(`Application started at port: ${port}`))

//routes
//app.use('/customers', customer);
app.use('/', cashier);

app.use('/', function(req, res){
    res.render('home.ejs')
})


