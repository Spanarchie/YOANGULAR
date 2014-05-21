'use strict';

angular.module('workflowApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
	      templateUrl: 'views/login.html',
	      controller: 'MainCtrl'
      })
      .when('/report', {
          templateUrl: 'views/report.html',
		      controller: 'MainCtrl'
	      })
	  .when('/account', {
		      templateUrl: 'views/account.html',
		      controller: 'MainCtrl'
	      })
      .otherwise({
            redirectTo: '/'
          });
  });

