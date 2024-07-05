const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/api/user', require('./routes/users'));
app.use('/api/navbar', require('./routes/navbar'));
app.use('/api/slider', require('./routes/sliders'));
app.use('/api/banner', require('./routes/banners'));
app.use('/api/product', require('./routes/products'));
app.use('/api/homepagetitle', require('./routes/homepagetitles'));
app.use('/api/collection_image', require('./routes/collection_images'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/footer', require('./routes/footer'));

module.exports = app;
