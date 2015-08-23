import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  officeNumber: DS.attr('string'),
  cellNumber: DS.attr('string'),
  email: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  organization: DS.attr('string'),
});
