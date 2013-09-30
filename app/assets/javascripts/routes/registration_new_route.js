App.RegistrationNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    save: function() {
      var self = this;
      return this.currentModel.save().then(function(user) {
        self.store.push('user', user.get('data'));
        return self.transitionToRoute('index');
      }, function(resp) {
        return self.currentModel.set('errors', resp.responseJSON.errors);
      });
    },
    cancel: function() {
      return this.transitionTo('index');
    }
  },
  deactivate: function() {
    if (!this.currentModel.get('isSaving')) {
      return this.currentModel.rollback();
    }
  }
});
