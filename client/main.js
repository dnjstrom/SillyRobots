// Access collections
Arenas = new Meteor.Collection("arenas");
var arenasHandle = Meteor.subscribe('arenas');

Strategies = new Meteor.Collection("strategies");

Template.arenas.arenas = function () {
  return Arenas.find({}, {sort: {name: 1}});
};

Template.arenas.greeting = function () {
  return "Welcome to SillyRobot.";
};

Template.arenas.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});

Template.new_arena.events = {
  'click input.add': function () {
    var name = document.getElementById("new_arena_name").value;
    Arenas.insert({name: name});
  }
}
