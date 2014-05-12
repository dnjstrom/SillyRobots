Router.map( function () {
  this.route('arenas', {path: '/'});
  this.route('arenas_show', {
    path: '/arenas/:_id',
    waitOn: function() { return Meteor.subscribe('arena', this.params._id)},
    data: function () { return Arenas.findOne(this.params._id) }
  });
  this.route('about');
});
