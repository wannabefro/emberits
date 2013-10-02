App.Comment = DS.Model.extend({

  body: DS.attr('string'),
  created_at: DS.attr(),
  mit: DS.belongsTo('mit'),
  user: DS.belongsTo('user')

});
