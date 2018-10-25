angular.module("myApp").controller('articleCtrl', function(
    $location,
    $scope,
    $state,
    $http,
    $stateParams,
    searchTypes,
    searchStutes,
    ArticleService,
    provderdelete,
    provderclearSear,
    provderupAndDown,
    provderpage,
    provdergetarticle,
    provdersearch,
    provderrest) {
    var article = $scope.article = {};
    article.searchType = $state.params.type;
    article.searss = $state.params.status;
    article.dt1 = parseInt($location.search().startAt);
    article.dt2 = parseInt($location.search().endAt);

    //获取文章列表。
    provdergetarticle(ArticleService,$scope,$stateParams);
    //搜索按钮，然后是封装好的服务。
    $scope.search = function () {
        provdersearch($scope,$state)
    };
    //这是一个上下线的东西。
    $scope.upAndDown = function (status,id) {
        provderupAndDown(ArticleService,$state,status,id)
    };
    //这是一个删除的东西
    $scope.delete = function (id) {
        provderdelete(ArticleService,$state,id)
    };
    //这是一个分页东西。
    $scope.pageChange = function () {
        provderpage($state,$scope);
    };
    // 其他乱七八糟的东西，比如搜索，打开日期选择器
    provderrest($state,$scope,$location,searchTypes,searchStutes,$stateParams);
    // 清除搜索框的东西。重置。
    $scope.clearSear = function () {
        provderclearSear($state,$scope)
    };
    // 点击新增按钮。
   $scope.articleadd = function () {
       $state.go('backstage.append')
   };
   //点击修改按钮跳转页面。
   $scope.editbtn = function (id) {
       $state.go('backstage.edit', {
           id: id,
       })
   };
});


