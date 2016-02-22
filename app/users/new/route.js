import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('user');

  },
  actions: {
    save: function(model){
      var router = this;
      model.save().then(function(){
        router.transitionTo('users.details', model);

      });

    }
  }

});
