import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tracker', {path: '/'}, function() {
    this.route('contacts', function() {
      this.route('create');
      this.route('show');
    });
    this.route('events', function() {
      this.route('create');
      this.route('edit');
      this.route('show');
    });
  });
});

export default Router;
