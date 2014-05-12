Meteor.startup(function () {

  // if the database is empty on server start, create some sample data.
  if (Arenas.find().count() === 0) {

    var arena_id = Arenas.insert({
      name: "Awesome Arena",
      strategies: []
    });

  }

});
