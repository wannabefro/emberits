// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route("index", {path: "/"});
  this.resource("mits", function() {
    this.route("filtered", {path: "/:date"});
    this.resource("mit", {path: "/:mit_id"});
    this.route("new", {path: "/new"});
  });
  this.resource("tags", {path: "/tags"}, function() {
    this.resource("tag", {path: ":tag_id"});
  });
});
