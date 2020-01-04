var app = angular.module('websiteApp', []);
app.constant('Constants', {
    WindowsIds: {
        start: '#startWindow',
        about: '#aboutWindow',
        projects: '#projectsWindow',
        stack:'#stackWindow'
    }
}); 

app.controller('websiteCtrl', function($scope, Constants) {
  // 0- start, 1- about, 2- projects, 3- stack
  $scope.step = 0;

  $scope.setStep = function(stepNumber){
    $scope.step = stepNumber;
    $scope.showElementAnimation(stepNumber);
  };

  $scope.getElementId = function(stepNumber){
    switch (stepNumber) {
        case 0:
            return Constants.WindowsIds['start'];
        case 1:
            return Constants.WindowsIds['about'];
        case 2:
            return Constants.WindowsIds['projects'];
        case 3:
            return Constants.WindowsIds['stack'];
        default:
            return Constants.WindowsIds['start'];

    }
  }

  $scope.showElementAnimation = function(stepNumber){
    var element = $scope.getElementByStepNumber(stepNumber);

    if(element){
        element.removeClass('animated fadeOutRight slow');
        element.addClass('animated fadeInDown');
    }
  }

  $scope.getElementByStepNumber = function(stepNumber){
    var elementId = $scope.getElementId(stepNumber);
    return $(elementId);
  }
  
});