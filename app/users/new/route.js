import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('user');

  },
  actions: {
    save: function(){
      // var router = this;
      var user = this.modelFor(this.routeName);
      user.save().then((user)=>{
        this.transitionTo('users.details', user);
      });


    }
  }

});
