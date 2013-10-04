App.MitsIndexController = Ember.ArrayController.extend({
  needs: 'mits',

  actions: {

    complete: function(mit){
      mit.set('complete', true);
      return this.get('content').save();
    }
  }

});
