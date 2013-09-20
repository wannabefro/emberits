App.Tag = DS.Model.extend({
  name: DS.attr('string'),
  mits: DS.hasMany('mit')
});
