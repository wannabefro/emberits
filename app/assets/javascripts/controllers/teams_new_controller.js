App.TeamsNewController = Ember.ObjectController.extend({
  needs: 'session',

  actions: {
    save: function() {
      var self = this;
      var userList = this.get('userList').replace(/\s/g, "").split(',');
      userList.push(this.get('controllers.session.currentUser').get('username'));
      this.store.find('user', {username: userList}).then(function(response){
        self.get('users').set('content', response.get('content'));
        return self.get('content').save().then(self.onDidCreate.bind(self), self.onError.bind(self));
      }, function(response){
        self.set(errorMessage, response.message);
      });
    },
    cancel: function() {
      this.transitionToRoute('teams');
      return this.get('content').rollback();
    }
  },
  onDidCreate: function(team) {
    this.store.push('team', team.get('data'));
    return this.transitionToRoute('team', team);
  },
  onError: function(error) {
    if (Ember.isEqual(error.status, 422)) {
      return this.get('content').set('errors', error.responseJSON.errors);
    } else {
      return alert("Validation error occured - " + error.responseText);
    }
  }


});


