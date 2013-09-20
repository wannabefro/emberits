App.MitsController = Ember.ArrayController.extend({

 mitDay: function(){
    var uniqueDays = {};
    this.get('content').mapBy('date').uniq().reverse().forEach(function(item) {uniqueDays[item] = [] });
    this.get('content').map(function(item){return uniqueDays[item.get('date')].push(item)});
    return uniqueDays;
  }.property('date')


});

