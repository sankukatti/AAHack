'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema;


// Airport schema
var BookingSchema = new Schema({
  flight: {
    type: Schema.ObjectId,
    ref: 'Flight'
  },
  status: {
    type: Boolean,
    default: false
  },
  pnr: {
    type: String,
    default: ''
  },
  bookingContacts: {
    phone: {
      type: Number
    },
    name: {
      type: String
    }
  },
  bookingPassengers: [
    {
      name: {
        type: String
      },
      age: {
        type: Number
      }
    }
  ],
  from: {
    type: Schema.ObjectId,
    ref: 'Airport'
  },
  to: {
    type: Schema.ObjectId,
    ref: 'Airport'
  },
  dept: {
    type: Date
  },
  arrival: {
    type: Date
  }
});

mongoose.model('Booking', BookingSchema);
