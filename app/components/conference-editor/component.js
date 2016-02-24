import Ember from 'ember';
const ConferenceEditorComponent = Ember.Component.extend({
   selectedTopic: null,
  topics: ["Ember.js", "React.js", "Angular.js", "Ruby on Rails", "SQL", "Python", "Elixir"],
  actions: {
    save: function(model){
      // var router = this;
      var component = this;
      model.save().then(function(){
        console.log('Model saved');
        component.sendAction('handleRedirect', model);
      });
    }
  }
});
ConferenceEditorComponent.reopenClass({
  positionalParams: ['conference']
});
export default ConferenceEditorComponent;