import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  hostName: 'http://jobtracker.azurewebsites.net',
  namespace: 'api',
});
