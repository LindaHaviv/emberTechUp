import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

 Router.map(function() {
 this.route('conferences', function() {
    this.route('conference', { path: ':conference_id' });
  });
  this.route('topics', function() {
    this.route('topic', { path: ':topic_id' });
  });
  this.route('users', function() {
    this.route('user', { path: ':user_id' });
  });  
   });
        

export default Router;
