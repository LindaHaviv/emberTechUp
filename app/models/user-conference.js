import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('reference'), 
  conference: DS.attr('reference'),
  user: DS.belongsTo('user'), //make it :attendee
  conference: DS.belongsTo('conference') //make it :attended_conference
});

