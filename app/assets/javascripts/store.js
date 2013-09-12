// http://emberjs.com/guides/models/defining-a-store/

Emberits.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.RESTAdapter.create()
});
