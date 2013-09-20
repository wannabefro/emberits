App.MitsFilteredController = Ember.ObjectController.extend({
  needs: ['mits'],

  filteredMits: (function() {
    var date = this.get('content').date;
    return this.get('controllers.mits.content').filterProperty('date', date);
  }).property('content.@each.niceDate')
});
