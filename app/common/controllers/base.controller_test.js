/**
 * Created by LamDo on 8/23/15.
 */
'use strict';
describe("myApp.common.controllers", function(){
    var scope, createController;

    beforeEach(angular.mock.module('myApp.common.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('BasedController', {
                '$scope': scope
            });
        };
    }));

    describe('common base controller', function() {
        it('should be define as well', function() {

            var basedController = createController();
            expect(basedController).toBeDefined();
            expect(scope.setTitle).toBeDefined();
            expect(scope.sharedMessage).toEqual("this is sharing message from Based Controller");
        });

        it('should have setTitle working properly', function () {
            createController();
            expect(scope.setTitle).toBeDefined();
            scope.setTitle();
            expect(scope.title).toEqual("this is based title");
        });
    });
});