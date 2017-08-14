import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Author 1 Example",
  title: "Title 1 Example",
  detail: "Detail 1 Example"
}, {
  id: 2,
  author: "Author 2 Example",
  title: "Title 2 Example",
  detail: "Detail 2 Example"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
