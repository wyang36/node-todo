const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);

app.listen(port);