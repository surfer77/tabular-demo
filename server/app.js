//server only code

Meteor.startup(function () {
  if (Books.find().count() === 0) {
    var books = [
      {title: "Discover Meteor", author: "Tom Coleman and Sacha Grief", url: "http://www.meteor-tutorial.org/"},
      {title: "Your First Meteor Application", author: "David Turnbull", url: "http://meteortips.com/first-meteor-tutorial/"},
      {title: "Meteor Tutorial", author: "Matthew Platts", url: "https://www.discovermeteor.com/"},
      {title: "Discover in Action", author: "Stephen Hochaus and Manuel Schoebel", url: "http://www.meteorinaction.com/"},
      {title: "Meteor Cookbook", author: "Abigail Watson", url: "https://github.com/awatson1978/meteor-cookbook/blob/master/table-of-contents.md"},
      {title: "Meteor Cookbook", author: "Matthew Watson", url: "http://www.google.com"}];
    _.each(books, function (book) {
      Books.insert(book);
    });
  }
});



