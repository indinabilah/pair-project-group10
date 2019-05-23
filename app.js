const express = require('express');
const app = express();
const port = 3000;
const customer = require('./routes/customer');
const cashier = require('./routes/cashier');
const menu = require('./routes/menu');

//route for static files
app.use(express.static('views'));
app.use('/', customer)
app.use('/', menu)

//parsing form url-encoded
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Application started at port: ${port}`))

//routes
//app.use('/customers', customer);
app.use('/', cashier);

app.use('/', function(req, res){
    res.render('home.ejs')
})


