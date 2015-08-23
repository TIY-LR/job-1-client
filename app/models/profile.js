import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),

  fullName: Ember.computed('lastName', 'fullName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  phoneNumber: DS.attr('string'),
  email: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  currentFormerEmployer: DS.attr('string'),
});

