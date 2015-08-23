import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('profile');
  },

  actions: {
    save: function(profile) {

      profile.save().then(() => {
        this.transitionTo('tracker');
      });
    }
  }
});
