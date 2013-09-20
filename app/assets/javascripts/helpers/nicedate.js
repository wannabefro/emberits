Ember.Handlebars.helper('niceDate', function(date) {
  return moment(date).format("MM-DD-YYYY");
});
