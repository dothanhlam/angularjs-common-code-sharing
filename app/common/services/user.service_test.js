/**
 * Created by LamDo on 8/24/15.
 */
describe("UserService service tests", function() {
    beforeEach(angular.mock.module('myApp.common.services'));

    it('should have a working UserService service', inject(['UserService',
        function(userService) {
            expect(userService).toBeDefined();
        }]));
});