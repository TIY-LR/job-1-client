import DS from 'ember-data';

export default DS.Model.extend({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  officeNumber: DS.attr('string'),
  cellNumber: DS.attr('string'),
  email: DS.attr('string'),
  addressOne: DS.attr('string'),
  addressTwo: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  publicOrg: DS.attr('string'),
});
