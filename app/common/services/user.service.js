/**
 * Created by LamDo on 8/24/15.
 */
angular.module('myApp.common.services')
    .factory('UserService', ['$http',
        function($http) {
            var service = {};

            // private functions

            function successHandler(data) {
                return data;
            }

            function errorHandler(error) {
                return function () {
                    return { success: false, message: error };
                };
            }

            service.list = function() {
                return $http.get('/api/users').then(successHandler, errorHandler('Error'));
            };

            service.getById = function(id) {
                return $http.get('/api/users/' + id).then(successHandler, errorHandler('Error'));
            };

            service.getByUsername = function(username) {
                return $http.get('/api/users/' + username).then(successHandler, errorHandler('Error'));
            };

            service.create = function(user) {
                return $http.post('/api/users', user).then(successHandler, errorHandler('Error'));
            };

            service.delete = function(id) {
                return $http.delete('/api/users/' + id).then(successHandler, errorHandler('Error'));
            };

            service.update = function(user) {
                return $http.put('/api/users/' + user.id, user).then(successHandler, errorHandler('Error'));
            };

            return service;
        }]);