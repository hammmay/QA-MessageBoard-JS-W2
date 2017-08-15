import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('You really want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
