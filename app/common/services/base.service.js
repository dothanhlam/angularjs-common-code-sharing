/**
 * Created by LamDo on 7/8/15.
 */

angular.module('myApp.common.services')
.factory('Notify', ['$window',
        function(win) {
            var msgs = [];
                return function(msg) {
                    msgs.push(msg);
                    if (msgs.length == 3) {
                        win.alert(msgs.join("\n"));
                        msgs = [];
                    }
                };
            }
    ]);
