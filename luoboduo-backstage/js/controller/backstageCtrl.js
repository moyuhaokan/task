angular.module("myApp").controller('backstageCtrl', function($scope,$state,sidebar,provdersaidebar) {
    //检查有没有登录，如果没有的话，就先去登录。
    let username=document.cookie.split(";")[0].split("=")[1];
    if (username != 'back') {
    alert("先去登录好吗？");
        $state.go('login');
    }
    //退出登录的按钮
        $scope.logout = function () {
            let longout = confirm("确定要退出吗？");
            if (longout) {
                document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                $state.go('login');
            }
        };
    //这是手风琴
    provdersaidebar($scope,sidebar)

});
