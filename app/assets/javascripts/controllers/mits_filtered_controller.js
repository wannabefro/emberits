App.MitsFilteredController = Ember.ObjectController.extend({
  needs: ['mits'],
  sortProperties: ['date'],
  sortAsending: false,

  filteredMits: (function() {
    var date = this.get('content').date;
    return this.get('controllers.mits.content').filterProperty('date', date);
  }).property('controllers.mits.content.length')

});
