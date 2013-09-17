App.Mit = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  tag_list: DS.attr('string'),
  day: DS.belongsTo('day'),

  tagArray: function(){
    return this.get('tag_list').split(',').filter(function(v){return v!==''});
  }.property('tag_list')

});

