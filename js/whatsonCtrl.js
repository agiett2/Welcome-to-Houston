'use strict';

app.controller('whatsonCtrl', ['$scope', '$location',
    function whatsonCtrl($scope, $location) {
       $scope.show = true;
       $scope.showDwight = true;    
        
       $scope.showHarden = function() {
            $scope.this.show = !$scope.show;
        };
        
       $scope.showHoward = function() {
            $scope.showDwight = !$scope.showDwight;
        };
        
        $scope.home = function() {
             $location.path('/Home'); 
        };
        $scope.sightseeing = function () {
             $location.path('/Sightseeing');
        };
        $scope.eatingout = function () {
             $location.path('/Eatingout');
        }
        $scope.whatson = function () {
             $location.path('/Whatson');
        };
        $scope.wheretostay = function () {
             $location.path('/Wheretostay');
        };
    

    }
]);