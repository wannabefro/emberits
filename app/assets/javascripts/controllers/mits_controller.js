App.MitsController = Ember.ArrayController.extend({

 mitDay: function(){
    var uniqueDays = {};
    var days = this.get('content').mapBy('date').uniq();
    var sortedDays = days.sort(function(a,b){
      a = new Date(a.date);
      b = new Date(b.date);
      return a<b?-1:a>b?1:0;
    }).reverse();
    sortedDays.forEach(function(item) {uniqueDays[item] = [] });
    this.get('content').map(function(item){return uniqueDays[item.get('date')].push(item)});
    return uniqueDays;
  }.property('content')


});

