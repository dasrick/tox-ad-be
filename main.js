'use strict';

// Load dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
var path = require('path');

// create
const app = express();

// set up
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Public route
app.get('/api/deals/public', function (req, res) {
    var deals = [
        // Array of public deals here
    ];
    res.json(deals);
});

// Private route
app.get('/api/deals/private', function (req, res) {
    var deals = [
        // Array of Private Deals here
    ];
    res.json(deals);
});

app.listen(app.get('port'), function () {
    console.log('✔ Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
