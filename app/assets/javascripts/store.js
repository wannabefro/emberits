// http://emberjs.com/guides/models/defining-a-store/

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    namespace: 'api'
  })
});
