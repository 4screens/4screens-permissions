'use strict';
var path = require('path');
var fs = require('fs');

var configFilePath = path.resolve(__dirname, '../config.json');

module.exports = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
