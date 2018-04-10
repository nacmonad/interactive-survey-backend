// Initializes the `responses` service on path `/responses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/responses.model');
const hooks = require('./responses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'responses',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/responses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('responses');

  service.hooks(hooks);
};
