App.Membership = DS.Model.extend({
  state: DS.attr(),
  role: DS.attr(),
  user: DS.belongsTo('user'),
  team: DS.belongsTo('team'),

})
