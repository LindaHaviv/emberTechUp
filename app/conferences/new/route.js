import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('conference');

  },
  actions: {
    save: function(model){
      var router = this;
      model.save().then(function(){
        router.transitionTo('conferences.details', model);

      });

    }
  }

});
