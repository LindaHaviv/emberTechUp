import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('topic');

  },
  actions: {
    save: function(model){
      var router = this;
      model.save().then(function(){
        router.transitionTo('topics.details', model);

      });

    }
  }

});
