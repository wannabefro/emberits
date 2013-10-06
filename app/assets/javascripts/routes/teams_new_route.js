App.TeamsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  },
  actions: {
    save: function() {
      var self = this;
      return this.currentModel.save().then(function(team) {
        self.store.push('team', team.get('data'));
        return self.transitionToRoute('team', team);
      }, function(resp) {
        return self.currentModel.set('errors', resp.responseJSON.errors);
      });
    },
    cancel: function() {
      return this.transitionTo('teams');
    }
  },
  deactivate: function() {
    if (!this.currentModel.get('isSaving')) {
      return this.currentModel.rollback();
    }
  }
});
