newspaperTracker.controller('BeatsCtrl',
function BeatCtrl($scope, BeatsFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
