'use strict';

angular
  .module('workflowApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
	    templateUrl: 'views/login.html',
	    controller: 'LogCtrl'
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
