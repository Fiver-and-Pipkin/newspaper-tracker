var newspaperTracker = angular.module('newspaperTracker', ['ui.router']);

newspaperTracker.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: "ReportersCtrl"
  });

  $stateProvider.state('reporters', {
    url: "/reporters",
    templateUrl: "partials/reporters.html",
    controller: "ReportersCtrl"
  });

});
