Stories = new Meteor.Collection("stories");

if (Meteor.isClient) {

  Template.stories.stories = function () {
    // Return a cursor to all the documents in the collection, sorted
    // descending by votes.
    return Stories.find({}, {
      $sort: { votes: -1 }
    });
  };

} else if (Meteor.isServer) {

  // Insert some sample data.
  if (! Stories.findOne()) {
    Stories.insert({
      title: "Show HN: Snapchat for Uber",
      link: "http://foo.com",
      votes: 0
    });
    Stories.insert({
      title: "All of algorithmic trading, in 3 lines of Golang",
      link: "http://bar.com",
      votes: 0
    });
    Stories.insert({
      title: "Ask HN: How often do you shower?",
      link: "http://baz.com",
      votes: 0
    });
    Stories.insert({
      title: "I failed and I loved it",
      link: "http://quux.com",
      votes: 0
    });
  }

}
