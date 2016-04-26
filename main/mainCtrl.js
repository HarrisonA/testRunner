angular.module('testRunner.main', ['MainServices'])

.controller('mainCtrl', [
  '$scope',
  'TestFactory',
  function mainController($scope, TestFactory) {

    // default status on page load
    $scope.passing = 0;
    $scope.failing = 0;
    $scope.running = 0;
    $scope.allDone = false;

    //default status for each test on page load
    var status = "Not started yet.";

    $scope.testArray = [
      { description: "commas are rotated properly", status:status },
      { description: "exclamation points stand up straight", status:status },
      { description: "run-on sentences don't run forever",   status:status },
      { description: "question marks curl down, not up",  status:status },
      { description: "semicolons are adequately waterproof", status:status },
      { description: "capital letters can do yoga",         status:status },
    ];

    //callback
    var showResults = function (results, testElem) {
      $scope.running--;
      if (results===true){
        testElem.status = "Passed!";
        $scope.passing++;
      } else {

        testElem.status = "Failed!";
        $scope.failing++;
      }

      if($scope.running === 0){
        $scope.allDone = true;
      }

      // return results;
    }

    //scope function
    $scope.startTest = function () {

      // reset the values each time start button is pressed
      $scope.passing = 0;
      $scope.failing = 0;
      $scope.running = 0;
      $scope.allDone = false;

      // loop through all and run all the tests
      for (var i = 0; i < $scope.testArray.length; i++) {
        $scope.testArray[i].status = "Running"
        $scope.running++;
        TestFactory.runTest(showResults, $scope.testArray[i]);
      }

    };



  },
]);
