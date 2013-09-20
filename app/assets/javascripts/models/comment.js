App.Comment = DS.Model.extend({

  content: DS.attr('string'),
  created_at: DS.attr(),
  mit: DS.belongsTo('mit')

});
