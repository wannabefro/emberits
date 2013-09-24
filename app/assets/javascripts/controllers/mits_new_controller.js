App.MitsNewController = Ember.ObjectController.extend({

  actions: {
    save: function() {
      return this.get('content').save().then(this.onDidCreate.bind(this), this.onError.bind(this));
    },
    cancel: function() {
      this.transitionToRoute('mits');
      return this.get('content').rollback();
    }
  },
  onDidCreate: function(mit) {
    this.store.push('mit', mit.get('data'));
    return this.transitionToRoute('mit', mit);
  },
  onError: function(error) {
    if (Ember.isEqual(error.status, 422)) {
      return this.get('content').set('errors', error.responseJSON.errors);
    } else {
      return alert("Validation error occured - " + error.responseText);
    }
  }


});


