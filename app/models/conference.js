import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  topicId: DS.attr('integer'),
  date: DS.attr('date')
 
});

// add this in ember
//   has_many :attendees, through: :user_conferences
//   has_many :user_conferences