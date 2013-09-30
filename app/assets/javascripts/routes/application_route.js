App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    var self = this;
    Ember.$.getJSON('/session/').then(function(response) {
      self.controllerFor('session').setCurrentUser(response.user.id);
    });
  }
});
