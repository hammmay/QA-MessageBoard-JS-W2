import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('You really want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
