App.DayController = Ember.ObjectController.extend({
  dayMitsShowing: function(){
    var currentRoute = App.get('Router.router.currentHandlerInfos');
    return currentRoute.get('lastObject').name === 'day.index';
  }.property()
});

