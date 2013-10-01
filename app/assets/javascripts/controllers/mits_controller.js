App.MitsController = Ember.ArrayController.extend({

  mitDays: function(){
    var uniqueDays = {};
    var mitDaysCount = [];
    var days = this.get('content').getEach('date').uniq();
    days.forEach(function(item) {uniqueDays[item] = [] });
    this.get('content').map(function(item){
      if (item.id != null){
        return uniqueDays[item.get('date')].push(item);
      }
    });
    Object.keys(uniqueDays).forEach(function(key) {
      mitDaysCount.push([key, uniqueDays[key].length]);
    });
    return mitDaysCount.sort(function (lhs, rhs) { return lhs < rhs ? 1 : lhs > rhs ? -1 : 0; });
  }.property('content.@each.id')

});
