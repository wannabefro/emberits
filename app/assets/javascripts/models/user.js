var attr = DS.attr;

App.User = DS.Model.extend({

  username: attr(),
  email: attr(),
  mits: DS.hasMany('mit'),
  comments: DS.hasMany('comment'),
  teams: DS.hasMany('team')

});
