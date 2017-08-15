import DS from 'ember-data';

export default DS.Model.extend({
  publisher: DS.attr(),
  response: DS.attr()
});
