'use strict'
var app = app || {};

app.userFormView = Backbone.View.extend({
  el: $(".container"),
  events: {
    "submit #user-form": "saveUser",
    "click #user-delete": "deleteUser",
  },
  model: new app.user(),
  render: function (id) {
    if (id) {
      var user = new app.user({ id: id });
      this.model = user
      var self = this;
      user.fetch({
        success: function (data) {
          console.log(data.toJSON());
          var template = _.template($("#user-form-template").html(), { user: data })
          self.$el.html(template)
        }
      })
    } else {
      var template = _.template($("#user-form-template").html(), { user: null })
      this.$el.html(template)
    }

  },
  saveUser: function (event) {
    event.preventDefault();
    console.log("Form submitted");
    var userDetail = $(event.currentTarget).serializeObject();

    this.model.unset('_id');
    this.model.save(userDetail, {
      success: function (data) {
        app.router.navigate("", { trigger: true });
      },
      error: function (model, xhr, options) {
        if (xhr.status === 400) {
          alert(xhr.responseText);
        }
      }
    })
  },

  deleteUser: function (event) {
    event.preventDefault();
    console.log("Delete User");

    this.model.destroy({
      success: function () {
        app.router.navigate("", { trigger: true });
      },
      error: function (model, xhr, options) {
        if (xhr.status === 404) {
          alert(xhr.responseText);
        }
      }
    })
  },


});