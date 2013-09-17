App.Day = DS.Model.extend({
  date: DS.attr('date'),
  mits: DS.hasMany('mit'),

  niceDate: function() {
    var date = this.get('date');
    return moment(date).format("MM-DD-YYYY");
  }.property('date')
});
