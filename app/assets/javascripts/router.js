// For more information see: http://emberjs.com/guides/routing/

App.Router.reopen({
  location: "history"
});

App.Router.map(function() {
  this.route("index", {path: "/"});
  this.resource('mits');
});
