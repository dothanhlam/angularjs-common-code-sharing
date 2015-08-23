/**
 * Created by LamDo on 8/24/15.
 */
angular.module('myApp.common.services')
    .factory('AuthenticationService', ['$http','UserService',
        function($http, userService) {
            var service = {};
            return service;
        }]);