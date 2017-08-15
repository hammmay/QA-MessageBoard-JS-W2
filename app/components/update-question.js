import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author') ? this.get('author') : "anonymous",
        title: this.get('title') ? this.get('title') : "No Question Asked",
        detail: this.get('detail') ? this.get('detail') : "No Details Given",
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
