import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  topicId: DS.attr('integer'),
  date: DS.attr('date'),
  topic: DS.belongsTo('topic'),
  users: DS.hasMany('user')
 
});
