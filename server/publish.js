
/*
  An arena is a sort of "fight room" in which a single fight is run at a time.
  {
    name: String,
    strategies: [strategy_id, ...],
  }
*/
Arenas = new Meteor.Collection("arenas");

Meteor.publish('arenas', function(query) {
  return Arenas.find(query);
});


/*
  A strategy is a program which can guide a robot in a fight.
*/
Strategies = new Meteor.Collection("strategies");

Meteor.publish('arenas', function (arena_id) {
  return Strategies.find({arena_id: arena_id});
});
