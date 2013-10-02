App.MitController = Ember.ObjectController.extend({

  needs: 'application',

  newCommentPath: function(){
    return window.location.hash.indexOf("new") != -1
  }.property('controllers.application.currentPath')

});
