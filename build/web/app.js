var app = angular.module("tableApp", []);

app.controller("mainController", function ($http) {
  var self = this;

  $http.get("api/member").success(function (data) {
    self.members = data;
  });
});
