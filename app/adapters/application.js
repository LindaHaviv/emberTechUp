import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000'
});


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise'
});