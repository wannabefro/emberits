App.TagsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('tag');
  }
})
