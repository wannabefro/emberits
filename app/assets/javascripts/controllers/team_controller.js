App.TeamController = Ember.ObjectController.extend({

  needs: 'session',

  invited: function(){
    var user = this.get('controllers.session.currentUser');
    if (user != null) {
      var invitations = this.get('controllers.session.currentUser.invitations').filterBy('team', this.get('content'));
    }
      if (invitations != [] && invitations != null){
        if (invitations.filterBy('state', 'pending').length == 1){

          return true;
        }
      }
  }.property('pendingMembers'),

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

