Ember.Handlebars.registerBoundHelper( 'pluralize', function( number, options ) {
    var phraseMatch = ( options.hash.phrase || '{|s}' ).match( /(.*?)\{(.*?)\|(.*?)\}/ )
    Ember.assert( 'The optional "phrase" hash for {{pluralize}} should be formatted as <phrase to pluralize>{<singular ending>|<plural ending>}', phraseMatch )
    var word = phraseMatch[ 1 ],
        singular = word + phraseMatch[ 2 ],
        plural = word + phraseMatch[ 3 ]
    return number == 1 ? singular : plural
})
