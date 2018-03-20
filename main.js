'use strict';

// Load dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const logger = require('morgan');

// create
const app = express();
const hour = 3600000;
const day = hour * 24;
const week = day * 7;

// set up
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: week}));
app.use(logger('dev'));

// Public route
app.get('/api/deals/public', function (req, res) {
    const deals = [
        // Array of public deals here
    ];
    res.json(deals);
});

// Private route
app.get('/api/deals/private', function (req, res) {
    const deals = [
        // Array of Private Deals here
    ];
    res.json(deals);
});

app.listen(app.get('port'), function () {
    console.log('✔ Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
