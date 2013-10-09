App.Team = DS.Model.extend({

  name: DS.attr(),
  users: DS.hasMany('user'),
  memberships: DS.hasMany('membership'),

  members: function(){
    return this.get('memberships').filterBy('state', 'accepted');
  }.property('memberships'),

  pendingMembers: function(){
    return this.get('memberships').filterBy('state', 'pending');
  }.property('memberships')

})
