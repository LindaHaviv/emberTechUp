import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('topics');
  this.route('conferences');
  this.route('user_conferences');
});

export default Router;
