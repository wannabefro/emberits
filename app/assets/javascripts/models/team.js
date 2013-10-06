App.Team = DS.Model.extend({

  name: DS.attr(),
  users: DS.hasMany('user')

})
