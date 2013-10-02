App.MitsIndexController = Ember.ArrayController.extend({

  actions: {

    complete: function(mit){
      mit.set('complete', true);
      return this.get('content').save();
    }
  }

});
