// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
    .state('form', {
        url: '/form',
        templateUrl: 'form.html',
        controller: 'formController'
    })

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('form.area', {
        url: '/area',
        templateUrl: 'form-area.html'
    })

    // url will be /form/interests
    .state('form.constructionCost', {
        url: '/construction-cost',
        templateUrl: 'form-construction-cost.html'
    })

    // url will be /form/payment
    .state('form.plotSize', {
        url: '/plot-size',
        templateUrl: 'form-plot-size.html'
    });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/area');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};



    $scope.processCalculations = function() {
        $scope.formData.superBuiltupArea = $scope.formData.carpetArea * $scope.formData.LoadFactor;
        $scope.formData.buildCost = $scope.formData.superBuiltupArea * $scope.formData.constructionCost;
        $scope.formData.totalPlotCost = $scope.formData.plotSize * $scope.formData.plotCost;
        $scope.formData.totalBuildCost = $scope.formData.buildCost + $scope.formData.totalPlotCost;
    }

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

});