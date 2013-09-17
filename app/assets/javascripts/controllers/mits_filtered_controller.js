App.MitsFilteredController = Ember.ObjectController.extend({
  needs: ['mits'],

  filteredMits: (function() {
    var date = this.get('content').nice_date;
    return this.get('controllers.mits.content').filterProperty('niceDate', date);
  }).property('content.@each.niceDate')
});
