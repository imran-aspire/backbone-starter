var app = app || {};

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'editUser',
    'edit/:id': 'editUser'
  }
});

app.router = new Router();

app.router.on('route:home', function () {
  console.log('Home page');
  userList = new app.userListView();
  userList.render();
});

app.router.on('route:editUser', function (id) {
  userFormView = new app.userFormView();
  userFormView.render(id);
});

// start backbone
Backbone.history.start();