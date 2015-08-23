/**
 * Created by LamDo on 7/8/15.
 */

angular.module('myApp.common.controllers')
    .controller("BasedController", ["$scope", function(scope) {
    console.log('test')
    scope.sharedMessage = "this is sharing message from Based Controller";
    scope.setTitle = function() {
        scope.title = "this is based title";
    }
}]);