// Access collections
Arenas = new Meteor.Collection("arenas");
Strategies = new Meteor.Collection("strategies");

Template.layout.greeting = function () {
  return "Welcome to SillyRobot.";
};

Template.arenas.arenas = function () {
  return Arenas.find({}, {sort: {name: 1}});
};

Template.new_arena.events = {
  'click input.add': function () {
    var name = document.getElementById("new_arena_name").value;
    Arenas.insert({name: name});
  }
}
