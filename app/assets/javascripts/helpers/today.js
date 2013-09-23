Ember.Handlebars.helper('today', function() {
  return moment().format("MM-DD-YYYY");
});
