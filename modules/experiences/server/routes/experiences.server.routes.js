'use strict';

/**
 * Module dependencies
 */
var experiencesController = require('../controllers/experiences.server.controller');

module.exports = function (app) {
  app.route('/api/experiences/:flightId').get(experiencesController.getMyExperience)
    .put(experiencesController.updateMyExperience);
};
