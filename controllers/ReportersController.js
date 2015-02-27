newspaperTracker.controller('ReportersCtrl', function ReportersCtrl(
  $scope, $stateParams, BeatsFactory, UtilitiesFactory
  ) {

  $scope.beat = UtilitiesFactory.findById(
    BeatsFactory.beats, $stateParams.beatId);
    $scope.BeatsFactory = BeatsFactory;

  // $scope.reporter = UtilitiesFactory.findById(
  //   BeatsFactory.beats, $stateParams.reporterId);
  //   $scope.BeatsFactory = BeatsFactory;

  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, yearsEmployed: $scope.reporterYearsEmployed, birthday: $scope. reporterBirthday  });
    $scope.reporterName = null;
    $scope.reporterYearsEmployed = null;
    $scope.reporterBirthday = null;
  };

});
