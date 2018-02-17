'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema;


// Airport schema
var AirportSchema = new Schema({
  name: {
    type: String
  },
  facilities: []
});

mongoose.model('Airport', AirportSchema);
