App.RegistrationNewController = Ember.ObjectController.extend({
  needs: 'session',

  actions: {
    signUp: function() {
      userInfo = this.getProperties('username', 'email', 'password', 'password_confirmation');
      data = {user: userInfo};
      $.post('/registrations', data, null, 'json').then(this.onDidCreate.bind(this), this.onError.bind(this));
    },
    cancel: function() {
      this.transitionToRoute('index');
      return this.get('content').rollback();
    }
  },
  onDidCreate: function(response) {
    this.store.init();
    var sessionsController = this.get('controllers.session');
    this.store.push('user', response.user);
    sessionsController.setCurrentUser(response.user.id);
    return this.transitionToRoute('index');
  },
  onError: function(error) {
    if (Ember.isEqual(error.status, 422)) {
      return this.get('content').set('errors', error.responseJSON.errors);
    } else {
      return alert("Validation error occured - " + error.responseText);
    }
  }
});

