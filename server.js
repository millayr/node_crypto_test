#!/bin/env node
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config.js');
const keyManagement = require('./server/keyManagement.js');

// set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static(path.join(__dirname, 'client')));
app.get("/", function(req, res) {
  res.redirect('/client/index.html');
});

// begin listening indefinitely
app.listen(config.port, config.ipaddress);
require("./server/api.js")(app, keyManagement);
