const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const mysqlconnection = require('./connection');
var cors = require('cors')
const fileUpload = require('express-fileupload');
const app = express();
app.use(express.static('uploads'))
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyparser.json());
app.use(cors())
app.use('/store', storeRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(4000);