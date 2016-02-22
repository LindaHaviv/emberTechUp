import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  topicId: DS.attr('integer'),
  date: DS.attr('date', {defaultValue: new Date()}),
  creator: DS.belongsTo('user', {async: true}),
  topic: DS.belongsTo('topic', {async: true}),
  // attendees: DS.hasMany('user', {async: true})
 
});
