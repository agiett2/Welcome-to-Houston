'use strict';

app.config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/Home',
                                    {
                    templateUrl: 'views/Home.html',
                    controller: "indexCtrl"
                })
                .when('/Sightseeing',
                                    {
                    templateUrl: "views/Sightseeing.html",
                    controller: "sightseeingCtrl"
                })
                  .when('/Whatson',
                                    {
                    templateUrl: 'views/Whatson.html',
                    controller: "whatsonCtrl"
                })
                  .when('/Wheretostay',
                                    {
                    templateUrl: "views/Wheretostay.html",
                    controller: "wheretostayCtrl"
                })
                  .when('/Eatingout',
                                    {
                    templateUrl: "views/Eatingout.html",
                    controller: "eatingoutCtrl"
                })
                .otherwise({ redirectTo: '/Home'});
            }]);