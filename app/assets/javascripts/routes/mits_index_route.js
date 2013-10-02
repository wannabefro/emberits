App.MitsIndexRoute = Ember.Route.extend({
 model: function(params, queryParams, transition) {
    return this.store.find('mit', queryParams);
  }
});

 // App.PostsRoute = Ember.Route.extend({
 //        observesParameters: ['sort', 'search'],
 //        model: function() {
 //            return App.Post.find(this.get('queryParameters'));
 //        }
 //    });
