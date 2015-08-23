describe("base service tests", function() {
   beforeEach(angular.mock.module('myApp.common.services'));

    it('should have a working notify service', inject(['Notify',
        function(notify) {
            expect(notify).toBeDefined();
            expect(typeof notify).toEqual("function");
        }]));
});