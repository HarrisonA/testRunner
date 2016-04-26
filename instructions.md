This repo makes a test runner that runs automated tests in the browser and reports on their results as soon as each test completes.

Using a series of tests which randomly succeed or fail after running for a few seconds. These tests are inputs to the test runner.


function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}

var tests = [
  { description: "commas are rotated properly",          run: generateDummyTest() },
  { description: "exclamation points stand up straight", run: generateDummyTest() },
  { description: "run-on sentences don't run forever",   run: generateDummyTest() },
  { description: "question marks curl down, not up",     run: generateDummyTest() },
  { description: "semicolons are adequately waterproof", run: generateDummyTest() },
  { description: "capital letters can do yoga",          run: generateDummyTest() }
];

All 6 tests will run simultaneously. The user interface will communicate the following, using whatever design you like:

The current status of each test (Not Started Yet, Running, Passed, or Failed)
How many total tests have passed so far
How many total tests have failed so far
How many total tests are still running

An indication (e.g. "FINISHED!") when all tests have completed running
Initially each test is in the Not Started Yet state, the user must press a button to start them running. Once they are running, the interface should update in realtime without further user interaction.

