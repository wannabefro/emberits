App.SessionController = Ember.ObjectController.extend({
  username: null,
  password: null,
  errorMessage: null,
  currentUser: null,

  reset: function() {
    this.setProperties({
      username: null,
      password: null,
      errorMessage: null,
      model: null,
      currentUser: null
    });
  },

  isAuthenticated: function() {
    return (!Ember.isEmpty(this.get('model')));
  }.property('model'),

  setCurrentUser: function(user) {
    if (!Ember.isEmpty(user)) {
      var currentUser = this.store.find('user', user);
      this.set('currentUser', currentUser);
      this.set('model', currentUser);
    }
  },

  actions: {

    login: function() {
      var self = this,
      data = this.getProperties('username', 'password');
      $.post('/session/', data, null, 'json').then(function (response) {
        self.setCurrentUser(response.user_id);
      }, function(response){
        self.set('errorMessage', response.message);
      }).then(function() {
        var today = moment(new Date()).format("MM-DD-YYYY");
        self.transitionToRoute('mits.index', {queryParams: {date: today}});
      });
    },
    logout: function() {
      $.ajax({url: '/session/', type: 'delete'});
      this.reset();
      this.store.init();
      this.transitionToRoute('index');
    }
  }
});
