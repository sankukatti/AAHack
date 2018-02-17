var mongoose = require('mongoose');
var Experiences = mongoose.model('Experience');
var _ = require('lodash');

/*
* This is a controller function which gets the experience for a flight
* */
exports.getMyExperience = function (req, res) {
  var flightId = req.params.flightId;
  Experiences.find({ flightId: mongoose.Types.ObjectId(flightId) }).exec(function (err, experience) {
    if (err) {
      res.status(400).send('Flight not found');
    } else {
      res.jsonp(experience);
    }
  });
};


/*
* Update the experience for a specific flight traveller
* */
exports.updateMyExperience = function (req, res) {
  var flightId = req.params.flightId;

  Experiences.findOne({ flightId: mongoose.Types.ObjectId(flightId) }).exec(function (err, experience) {
    if (err) {
      res.status(400).send('Flight not found');
    } else {
      // Get the traveller and update the experience

      var userId = req.user._id;
      var travellerIndex = _.findIndex(experience.travellers, { userId: userId });

      if (travellerIndex >= 0) {
        var holdCabAtDest = req.body.holdCabAtDest;
        var feeling = {
          status: req.body.feeling
        };
        var travelEnjoyed = {
          status: req.body.travelEnjoyed
        };
        var carParked = req.body.carParked;
        var carParkingCode = req.body.carParkingCode;

        experience.travellers[travellerIndex].holdCabAtDest = holdCabAtDest;
        experience.travellers[travellerIndex].feeling = feeling;
        experience.travellers[travellerIndex].travelEnjoyed = travelEnjoyed;
        experience.travellers[travellerIndex].carParked = carParked;
        experience.travellers[travellerIndex].carParkingCode = carParkingCode;

        experience.save(function (err) {
          if (err) {
            res.status(400).send('Unable to update your experience');
          } else {
            res.jsonp(experience);
          }
        });
      } else {
        res.status(400).send('User not travelling on this flight');
      }
    }
  });
};
