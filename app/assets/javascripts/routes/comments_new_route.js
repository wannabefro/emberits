App.CommentsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('comment');
  },
  actions: {
    save: function() {
      var self = this;
      return this.currentModel.save().then(function(comment) {
        self.store.push('comment', comment.get('data'));
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
