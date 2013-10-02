App.Mit = DS.Model.extend({
  title: DS.attr(),
  created_at: DS.attr(),
  description: DS.attr(),
  comments: DS.hasMany('comment'),
  complete: DS.attr(),
  tagList: DS.attr(),
  tags: DS.hasMany('tag'),
  user: DS.belongsTo('user'),

  date: function(){
     return moment(this.get('created_at')).format("MM-DD-YYYY");
  }.property('created_at')



});

