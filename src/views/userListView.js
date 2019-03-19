'use strict'
var app = app || {};

app.userListView = Backbone.View.extend({
  el: $(".container"),
  render: function () {
    var self = this;
    app.users.fetch({
      success: function (data) {
        var template = _.template($("#user-list-template").html(), { users: data.models });
        self.$el.html(template);
      }
    })
  },
})