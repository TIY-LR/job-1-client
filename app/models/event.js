import DS from 'ember-data';

export default DS.Model.extend({
  eventName: DS.attr('string'),
  eventDate: DS.attr('string'),
  evntLocation: DS.attr('string'),
  eventLink: DS.attr('string'),
});
