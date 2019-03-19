'use strict'

var app = app || {};

app.user = Backbone.Model.extend({
  urlRoot: "/users/",
});