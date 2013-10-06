App.TeamsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('team');
  }
})
