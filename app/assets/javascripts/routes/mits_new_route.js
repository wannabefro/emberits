App.MitsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('mit');
  },
  actions: {
    save: function() {
      var self = this;
      return this.currentModel.save().then(function(mit) {
        self.store.push('mit', mit.get('data'));
        return self.transitionToRoute('mit', mit);
      }, function(resp) {
        return self.currentModel.set('errors', resp.responseJSON.errors);
      });
    },
    cancel: function() {
      return this.transitionTo('mits');
    }
  },
  deactivate: function() {
    if (!this.currentModel.get('isSaving')) {
      return this.currentModel.rollback();
    }
  }
});
