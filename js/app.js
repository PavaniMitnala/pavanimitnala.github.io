/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// angular.js main app initialization
var app = angular.module('example359', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/product1.html', activetab: 'projects', controller: HomeCtrl }).
        when('/project/:projectId', {
          templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
          controller: HomeCtrl,
          activetab: 'home'
        }).
        when('/facilities', {
          templateUrl: 'pages/facilities.html',
          controller: FacilitiesCtrl,
          activetab: 'facilities'
        }).
        when('/about', {
          templateUrl: 'pages/about.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
		when('/subscription', {
          templateUrl: 'pages/subscription.html',
          controller: SubscriptionCtrl,
          activetab: 'subscription'
        }).
		when('/schedule', {
          templateUrl: 'pages/schedule.html',
          controller: ScheduleCtrl,
          activetab: 'schedule'
        }).
		when('/gallery', {
          templateUrl: 'pages/gallery.html',
          controller: GalleryCtrl,
          activetab: 'gallery'
        }).
		when('/news', {
          templateUrl: 'pages/news.html',
          controller: NewsCtrl,
          activetab: 'news'
        }).
		when('/contact', {
          templateUrl: 'pages/contact.html',
          controller: ContactCtrl,
          activetab: 'contact'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

        // onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

        // save the 'Contact Us' form
        $scope.save = function () {
          $scope.loaded = true;
          $scope.process = true;
          $http.post('sendemail.php', $scope.message).success(function () {
              $scope.success = true;
              $scope.process = false;
          });
        };
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

