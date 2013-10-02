App.CommentsNewController = Ember.ObjectController.extend({
  needs: ['session', 'mit'],

  actions: {
    save: function() {
      var user = this.get('controllers.session.currentUser.content');
      var mit = this.get('controllers.mit.content')
      this.set('user', user);
      this.set('mit', mit);
      return this.get('content').save().then(this.onDidCreate.bind(this), this.onError.bind(this));
    },
    cancel: function() {
      this.transitionToRoute('mits');
      return this.get('content').rollback();
    }
  },
  onDidCreate: function(comment) {
    debugger;
    this.store.push('comment', comment.get('data'));
    return this.transitionToRoute('mit', comment.mit);
  },
  onError: function(error) {
    if (Ember.isEqual(error.status, 422)) {
      return this.get('content').set('errors', error.responseJSON.errors);
    } else {
      return alert("Validation error occured - " + error.responseText);
    }
  }


});
