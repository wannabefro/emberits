App.Mit = DS.Model.extend({
  title: DS.attr('string'),
  created_at: DS.attr(),
  description: DS.attr('string'),
  comments: DS.hasMany('comment'),
  tagList: DS.attr('string'),
  tags: DS.hasMany('tag'),
  user: DS.belongsTo('user'),

  date: function(){
     return moment(this.get('created_at')).format("MM-DD-YYYY");
  }.property('created_at')



});

