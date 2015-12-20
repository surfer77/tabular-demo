//code shared between client and server

Books = new Mongo.Collection("players");

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Books = new Tabular.Table({
  name: "BookList",
  collection: Books,
  columns: [
    {data: "title", title: "Title", className: "titleColumn" },
    {data: "author", title: "Author"},
    {data: "url", title: "Web address"}
  ],
 regex: false,
paging: false,
search: {
	smart: true,},
searchDelay: 2000,
});




