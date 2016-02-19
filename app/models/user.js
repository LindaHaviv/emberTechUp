import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  conferences: DS.hasMany('conference') //add foreign_key: 'creator_id'
});


// add this in ember
//  has_many :attended_conferences, through: :user_conferences
//   has_many :user_conferences
//   has_many :topics, through: :conferences