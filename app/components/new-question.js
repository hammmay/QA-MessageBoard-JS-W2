import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author') ? this.get('author') : "anonymous",
        title: this.get('title') ? this.get('title') : "No Question Asked",
        detail: this.get('detail') ? this.get('detail') : "No Details Given",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
