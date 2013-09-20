App.DaysRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('day');
  }
});
