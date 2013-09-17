App.Comment = DS.Model.extend({

  content: DS.attr('string'),
  created_at: DS.attr(),
  mit: DS.belongsTo('day'),

  timeAgo: function(){
    var created = this.get('created_at');
    return moment(created).fromNow();
  }.property('created_at')

});
