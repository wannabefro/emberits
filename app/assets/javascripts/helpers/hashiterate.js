Ember.Handlebars.helper('eachKeyValue', function(context, options) {
    var ret = "";
    $.each(context, function(key, value) {
        var entry = {"key": key, "value": value};
        ret = ret + options.fn(entry);
    });
    return ret;
});
