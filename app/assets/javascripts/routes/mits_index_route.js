App.MitsIndexRoute = Ember.Route.extend({
  model: function(params, queryParams, transition){
    return this.store.find('mit', queryParams);
  }
});

