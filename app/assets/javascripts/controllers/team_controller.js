App.TeamController = Ember.ObjectController.extend({

  pendingInvitation: false,
  owner: false,
  needs: 'session',

  invited: function(){
    var self = this;
    this.store.find('user', 'currentUser').then(function(user){
      var invitations = user.get('invitations').filterBy('team', self.get('content'));
      if (invitations.filterBy('state', 'pending').length == 1){
        self.set('pendingInvitation', true);
      } else {
        self.set('pendingInvitation', false);
      }
    }, function(){
        self.set('pendingInvitation', false);
    });

    if (self.get('pendingInvitation') == true){
      return true;
    }
  }.property('pendingMembers'),

  userAdmin: function(){
    var self = this;
    this.store.find('user', 'currentUser').then(function(user){
      if (self.get('admins').filterBy('user', user).length == 1){
        self.set('owner', true);
      } else {
        self.set('owner', false);
      }
    }, function(){
        self.set('owner', false);
    });

    if (self.get('owner') == true){
      return true;
    }
  }.property('admins'),

  actions: {
    accept: function() {
      var invitations = this.get('controllers.session.currentUser.invitations').filterBy('team', this.get('content'));
      var invitation = invitations[0];
      invitation.set('state', 'accepted');
      invitation.save().then(function(response){
        this.store.push('membership', response.get('data'));
        return this.transitionToRoute('team', response.team);
      }, function(error){
        if (Ember.isEqual(error.status, 422)) {
          return this.get('content').set('errors', error.responseJSON.errors);
        } else {
        return alert("Validation error occured - " + error.responseText);
        }
      });

    }


  }

});

