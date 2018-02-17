'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema;


// Airport schema
var CityTransportSchema = new Schema({
    city: {
      name: {
        type: String
      }
    },
    services: [
      {
        type: String
      }
    ]

});

mongoose.model('CityTransport', CityTransportSchema);
