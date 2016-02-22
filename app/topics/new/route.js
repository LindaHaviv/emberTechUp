import Ember from 'ember';

export default Ember.Route.extend({


  model(){
    return this.store.createRecord('topic');

  },
  actions: {
    save: function(){
      // var router = this;
      var topic = this.modelFor(this.routeName);
      topic.save().then((topic)=>{
        this.transitionTo('topics.details', topic);
      });


    }
  }

});
