Ember.Handlebars.helper('timeAgo', function(createdAt) {
  return moment(createdAt).fromNow();
});
