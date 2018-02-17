'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  path = require('path'),
  config = require(path.resolve('./config/config')),
  Schema = mongoose.Schema;

/*
* Experience schema
* */
var ExperienceSchema = new Schema({
  flightId: {
    type: Schema.ObjectId,
    ref: 'Flights'
  },
  flightDelay: {
    type: Number,
    default: 0
  },
  delayVideo: {
    type: String,
    default: ''
  },
  sourceCityTransportsId: {
    type: Schema.ObjectId,
    ref: 'CityTransport'
  },
  destCityTransportsId: {
    type: Schema.ObjectId,
    ref: 'CityTransport'
  },
  sourceAirportId: {
    type: Schema.ObjectId,
    ref: 'Airport'
  },
  destAitPortId: {
    type: Schema.ObjectId,
    ref: 'Airport'
  },
  crew: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ],
  duringTravel: {
    currentAltitude: {
      type: String,
      default: ''
    },
    pictures: [
      {
        type: String,
        default: ''
      }
    ],
    messages: [
      {
        name: {
          type: String,
          default: ''
        },
        text: {
          type: String,
          default: ''
        }
      }
    ]
  },
  travellers: [
    {
      userId: {
        type: Schema.ObjectId,
        ref: 'User'
      },
      holdCabAtDest: {
        type: Boolean,
        default: false,
        required: true
      },
      feeling: {
        status: {
          type: String,
          default: ''
        },
        time: {
          type: Date,
          default: Date.now
        }
      },
      travelEnjoyed: {
        status: {
          type: String,
          default: ''
        },
        time: {
          type: Date,
          default: Date.now
        }
      },
      carParked: {
        type: Boolean,
        default: false
      },
      carParkingCode: {
        type: String,
        default: ''
      },
      carReady: {
        status: {
          type: Boolean,
          default: true
        },
        time: {
          type: Date,
          default: Date.now
        }
      }
    }
  ]


});

mongoose.model('Experience', ExperienceSchema);
