import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('reference'),
  conference: DS.attr('reference')
});
