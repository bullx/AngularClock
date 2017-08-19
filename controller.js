
var app = angular.module('clockModule', ['ui.bootstrap','ds.clock' ]);


app.controller('Ctrl', ['$scope',
    function($scope) {
        $scope.theme = 'light';
    }
]);

compute();

function compute() {

    angular.module('ds.clock', [])
        .directive('dsWidgetClock', ['$interval',
            function($interval) {
                return {
                    restrict: 'EA',
                    templateUrl: "template.html"
                    ,
                    link: function(scope) {
                        var clock = {};
                        clock.start = parseInt(scope.start, 10);
                        scope.analog = true;
                        // make array for hours and minutes
                        scope.hourshand =  new Array(12);
                        scope.minuteshand = new Array(60);
                        function secondsUpdate (){
                            clock.start  += 1000;
                            scope.hrs= new Date().getHours();
                            scope.mins= new Date().getMinutes();
                            scope.secs= new Date().getSeconds();
                        };
                        // update the front end every one second
                        $interval(secondsUpdate, 1000);
                        secondsUpdate();

                    }
                };
            }
        ]);
};
