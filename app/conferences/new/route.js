import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('conference');

  },
  actions: {
    save: function(){
      // var router = this;
      var conference = this.modelFor(this.routeName);
      conference.save().then((conference)=>{
        this.transitionTo('conferences.details', conference);
      });


    }
  }

});
