import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('date', {defaultValue: new Date()}),
  topicId: DS.attr('string'),
  creator: DS.belongsTo('user', {async: true}),
  topic: DS.belongsTo('topic', {async: true}),
  // attendees: DS.hasMany('user', {async: true})
 
});
