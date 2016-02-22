import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

 // Router.map(function() {
 // this.route('conferences', function() {
 //    this.route('conference', { path: ':conference_id' });
 //    this.route('new');
 //  });
 //  this.route('topics', function() {
 //    this.route('topic', { path: ':topic_id' });
 //  });
 //  this.route('users', function() {
 //    this.route('user', { path: ':user_id' });
 //  });  
 //   });
        

 Router.map(function() {
   this.route('conferences', function() {
     this.route('new');
     this.route('edit');
     this.route('details', {path: ':id'});
   });
   this.route('topics', function() {
     this.route('new');
     this.route('edit');
     this.route('details', {path: ':id'});
   });
   this.route('users', function() {
     this.route('new');
     this.route('edit');
     this.route('details', {path: ':id'});
   });

 });

export default Router;
