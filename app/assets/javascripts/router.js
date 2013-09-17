// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route("index", {path: "/"});
  this.resource("days", {path: "/days"}, function() {
    this.resource("day", {path: ":niceDate"}, function() {
      this.resource("mits", {path: "/mits"}, function() {
        this.resource("mit", {path: ":mit_id"})
      });
    });
  });
});
