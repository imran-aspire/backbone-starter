'use strict'

var app = app || {};

var userCollection = Backbone.Collection.extend({
  url: "/users/",
});

app.users = new userCollection();