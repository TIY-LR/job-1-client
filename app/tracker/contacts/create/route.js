import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');

  },

  actions: {
    save: function(contact) {

      contact.save().then(() => {
        this.transitionTo('tracker');
      });
      console.log(contact.firstName);
    }
  }
});
