Router.configure({
	layoutTemplate: 'layout'
});

Router.map( function () {
  this.route('arenas', {
  	path: '/',
    waitOn: function() { return Meteor.subscribe('arenas', {})}
  });

  this.route('arenas_show', {
    path: '/arenas/:_id',
    waitOn: function() { return Meteor.subscribe('arenas', this.params._id)},
    data: function () { return Arenas.findOne(this.params._id) }
  });

  this.route('about');
});
