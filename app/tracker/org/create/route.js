import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('org');

  },

  actions: {
    save: function(org) {
      org.save().then(() => {
        this.transitionTo('tracker');
      });
    }
  }
});
