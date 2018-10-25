angular.module('myApp').controller("loginCtrl",
    function ($scope,$state,ArticleService,provderlongin) {
        $scope.login = function() {
            provderlongin($scope,$state,ArticleService)
        }

    });

