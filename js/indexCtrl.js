'use strict';

app.controller('indexCtrl', ['$scope', '$location',
    function indexCtrl($scope, $location) {
        $scope.user = "";
        
        $scope.gotuser = true;
        
        $scope.home = function() {
             $location.path('/Home');
        };
        
        $scope.sightseeing = function () {
             $location.path('/Sightseeing');
        };
        $scope.eatingout = function () {
             $location.path('/Eatingout');
        };
        $scope.whatson = function () {
             $location.path('/Whatson');
        };
        
        $scope.wheretostay = function () {
             $location.path('/Wheretostay');
        };
         $scope.welcomeuser = function (username) {
                    $scope.user = username;
                    $scope.gotuser = false;
             if(username == ""){
                 $scope.gotuser = true;
             };
         };

    }
]);