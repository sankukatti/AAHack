'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema;


// Airport schema
var FlightSchema = new Schema({
  name: {
    type: String
  },
  from: {
    type: Schema.ObjectId,
    ref: 'Airport'
  },
  dest: {
    type: Schema.ObjectId,
    ref: 'Airport'
  }
});

mongoose.model('Flight', FlightSchema);
