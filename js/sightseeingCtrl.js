'use strict';

app.controller('sightseeingCtrl', ['$scope', '$location',
    function sightseeingCtrl($scope, $location) {
        
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