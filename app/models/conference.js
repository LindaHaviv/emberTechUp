import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  topicId: DS.attr('integer'),
  users: DS.hasMany('user') //want to say :creator
});

// add this in ember
//   has_many :attendees, through: :user_conferences
//   has_many :user_conferences