angular.module('MainServices', [])

.factory('TestFactory', [
  '$window',
  '$timeout',
  function ($window, $timeout) {

    // Define the factory obj
    var TestFactory = {};


    //=====================================================
    //private function
    function generateDummyTest() {
      var delay = 7000 + Math.random() * 7000;
      var testPassed = Math.random() > 0.5;

      return function(callback, test) {
        $timeout(function() {
          callback(testPassed, test);
        }, delay);
      };
    }


    //=====================================================
    //exposed functions
    TestFactory.runTest = function (myCallback, singleTest) {
      //execute the private function
      var noNameFunction = generateDummyTest();
      noNameFunction(myCallback, singleTest);
    };

    // Return the factory obj
    return TestFactory;
  },
]);
