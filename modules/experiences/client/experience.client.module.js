(function (app) {
  'use strict';

  app.registerModule('experience', ['core']);
  app.registerModule('chexperienceat.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
