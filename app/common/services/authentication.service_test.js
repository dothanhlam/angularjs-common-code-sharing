/**
 * Created by LamDo on 8/24/15.
 */
describe("AuthenticationService service tests", function() {
    beforeEach(angular.mock.module('myApp.common.services'));

    it('should have a working AuthenticationService service', inject(['AuthenticationService',
        function(authenticationService) {
            expect(authenticationService).toBeDefined();
        }]));
});