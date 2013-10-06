// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {

  this.route("index", {path: "/"});
  this.resource("mits", function() {
    this.route("index", {path: "/", queryParams: ['date']});
    this.resource("mit", {path: "/:mit_id"}, function(){
      this.resource('comments', {path: "comment"}, function(){
        this.route("new", {path: "/new"});
      })
    });
    this.route("new", {path: "/new"});
  });
  this.resource("tags", {path: "/tags"}, function() {
    this.resource("tag", {path: ":tag_id"});
  });
  this.resource("teams", function() {
    this.route("new", {path: "/new"});
    this.resource("team", {path: ":team_id"});
  });
  this.resource('session');
  this.resource('registration', function() {
    this.route('new');
  })
});
