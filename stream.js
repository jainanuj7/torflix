var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, ajaxService) {
    $scope.onStream = function() {
        ajaxService.send('stream', {
            "url": $scope.magnetInput
        }, 'POST');
    }
});