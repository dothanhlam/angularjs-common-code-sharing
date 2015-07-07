'use strict';

angular.module('myApp.view1', ['ngRoute',
    'myApp.common.controllers', 'myApp.common.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: './view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "notify", function(scope, notify) {
        scope.callNotify = function(msg) {
            notify(msg);
        };
}])
.controller("InheritedBasedController", ["$scope", "$controller", function(scope, controller) {
        // notice that this InheritedBasedController is derived from BasedController which be
        // declared in common/controllers module
  angular.extend(this, controller('BasedController', {$scope: scope}));
    console.log('title', scope.sharedMessage)
}]);