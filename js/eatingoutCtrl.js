'use strict';

app.controller('eatingoutCtrl', ['$scope', '$location',
    function eatingoutCtrl($scope, $location) {
     
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