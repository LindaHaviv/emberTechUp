import Ember from 'ember';
export default Ember.Route.extend({
  model(){
    return this.store.createRecord('conference');
  },
  actions: {
    displayList: function(model){
      // var router = this;
        this.transitionTo('conferences.details', model);
      }
  }

});