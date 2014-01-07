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
      title: "I didn't sleep for 30 days. Here is my story.",
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
      title: "The one MongoDB selector that will win her heart",
      link: "http://quux.com",
      votes: 0
    });
  }

}
