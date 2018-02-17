'use strict';

/**
 * Module dependencies.
 */

var should = require('should'),
    mongoose = require('mongoose'),
    Experience = mongoose.model('Experience'),
    path = require('path'),
    config = require(path.resolve('./config/config'));

/*
* Unit tests
* */

var experienceTestObjSuccess;
var experienceTestObjFail;

describe('Experience model unit tests', function () {
    before(function () {
        experienceTestObjSuccess = {
            fligntId: '1234',
            holdCabAtDest: true,
            delay: 10,
            delayVideo: '',
            sourceCityTransportsId: '5678',
            destCityTransportsId: '5678',
            sourceAirportId: '91011',
            destAitPortId: '121314',
            crew: [
                {
                    type: 'Captain',
                    name: 'Bilkhs kitf',
                    exp: '10'
                },
                {
                    type: 'Hostess',
                    name: 'jilkhs gitf'
                }
            ],
            carParked: true,
            carParkingCode: '',
            duringTravel: {
                altitude: '',
                pictures: [],
                messages: [
                    {
                        name: 'Shat',
                        text: 'Feeling exited!!'
                    }
                ]
            },
            travellers: [
                {
                    userId: 1234,
                    feeling: {
                        status: 'Happy',
                        time: new Date()
                    },
                    travelEnjoyed: {
                        status: true,
                    },
                    carready: false
                }
            ]
        };
        experienceTestObjFail = {
            flightId: '',
            holdCabAtDest: true,
            delay: 10,
            delayVideo: '',
            sourceCityTransportsId: '5678',
            destCityTransportsId: '5678',
            sourceAirportId: '91011',
            destAitPortId: '121314',
            crew: [
                {
                    type: 'Captain',
                    name: 'Bilkhs kitf',
                    exp: '10'
                },
                {
                    type: 'Hostess',
                    name: 'jilkhs gitf'
                }
            ],
            carParked: true,
            carParkingCode: '',
            duringTravel: {
                altitude: '',
                pictures: [],
                messages: [
                    {
                        name: 'Shat',
                        text: 'Feeling exited!!'
                    }
                ]
            },
            travellers: [
                {
                    userId: 1234,
                    feeling: {
                        status: 'Happy',
                        time: new Date()
                    },
                    travelEnjoyed: {
                        status: true,
                    },
                    carready: false
                }
            ]
        }
    });

    describe('Method save', function () {
        it('Should save the experience', function (done) {
            var experience = new Experience(experienceTestObjSuccess);
            experience.save(function (err) {
                should.not.exist(err);
                experience.remove(function (err) {
                    should.not.exist(err);
                    done();
                });

            });
        });
        
        it('Should not dave the experience', function (done) {
           var experience = new Experience(experienceTestObjFail);
           experience.save(function (err) {
               should.exist(err);
               done();
           });
        });
    });
    
});
