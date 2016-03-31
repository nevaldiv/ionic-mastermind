angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {
  //BINDINGS



  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];

  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;

  // TODO: You're going to need a data structure to hold a list of "turns";
  // and those "turns" are likely going to be objects...

  // Initialize game state
  $scope.newGame = function() {
    // TODO: Set all data properties/structures to their beginning state

  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    // TODO: Score the turn
    //call this when the user hits the score button

    // TODO: Show winModal IF turn is correct. Put line below in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal.
  // CONTRUCTOR FUNCTION:
  function Selections(input1, input2, input3, input4){
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    this.input4 = input4;
  }

  // CURRENT SELECTION OBJECT
  var currentSelection = new Selections("", "", "", "");

  //GENERATE SECRET CODE:

  var combination = {
    input1: generateAnswer(),
    input2: generateAnswer(),
    input3: generateAnswer(),
    input4: generateAnswer()
  };


  var generateAnswer = function(){
    return Math.floor(Math.random() * 4);
  };

  generateAnswer(combination);
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});
