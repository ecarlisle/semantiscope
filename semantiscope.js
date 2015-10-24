var semantiscope = {
  config : {
    observedTags: [
      'header',
      'footer',
      'section',
      'article',
      'aside'
    ]
  }
};

$(semantiscope.config.observedTags.toString()).hover(function(e){

  var tag = $(e.currentTarget),
      parents = $(tag).parents(),
      tagString = e.currentTarget.nodeName.toLowerCase();

  for (i=0; i<parents.length; i++) {
    parentTag = parents[i].nodeName.toLowerCase();

    if (semantiscope.config.observedTags.indexOf(parentTag) !== -1) {
      tagString = parentTag + ' > ' + tagString;
    }

  }

  console.log(tagString);

});
