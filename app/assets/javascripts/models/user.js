var attr = DS.attr;

App.User = DS.Model.extend({

  username: attr(),
  email: attr(),
  mits: DS.hasMany('mit'),
  comments: DS.hasMany('comment'),
  teams: DS.hasMany('team'),
  memberships: DS.hasMany('membership'),

  invitations: function(){
    return this.get('memberships').filterBy('state', 'pending');
  }.property('memberships'),

  currentTeams: function(){
    return this.get('memberships').filterBy('state', 'accepted');
  }.property('memberships')

});
