//删除某个文章或者数据。
app.factory('provderdelete', function() {
    return function(ArticleService,$state,id) {
        let definite = confirm('是否删除这个数据？');
        if (definite) {
            ArticleService.delArticle(id).then(function () {
                $state.reload();
            })
        }
    };
});
//清除搜索栏
app.factory('provderclearSear', function() {
    return function($state,$scope) {
        let article = $scope.article = {};
        article.dt1 = null;
        article.dt2 = null;
        article.searchType = null;
        article.searss =null;
        $state.go($state.current, {
            page: '',
            type:'',
            status: '',
            endAt:'',
            startAt:'',
        });
    };
});
//这是一个上下线的东西。
app.factory('provderupAndDown', function () {
    return function (ArticleService,$state,status,id) {
        if (status === 1) {
            let operate = confirm("你要下线这个数据吗？");
            if (operate) {
                ArticleService.unDownArticle(id,2).then(function () {
                        $state.reload();
                    }
                )}
        }else {
            let operate = confirm("你要上线这个数据吗？");
            if (operate) {
                ArticleService.unDownArticle(id,1).then(function () {
                        $state.reload();
                    }
                )}
        }
    }
});
//分页的封装。
app.factory('provderpage',function () {
    return function ($state,$scope) {
        console.log($scope.currentPage)
        $state.go('backstage.article', {
            page: $scope.currentPage,
        });
    }
});
//获取文章列表的封装。
app.factory('provdergetarticle',function () {
    return function (ArticleService,$scope,$stateParams) {
        //把所以的参数，放到一个对象里面。
        let vm = this;
        vm.searchParams = {};
        vm.searchParams.page = $stateParams.page;
        vm.searchParams.startAt = $stateParams.startAt;
        vm.searchParams.endAt = $stateParams.endAt;
        vm.searchParams.type = $stateParams.type;
        vm.searchParams.status = $stateParams.status;

        ArticleService.getArticlelist(vm.searchParams).then(function (resp) {
            $scope.maxSize = 10;
            $scope.records = resp.data.data.articleList;
            $scope.bigTotalItems = resp.data.data.total;
        });
    }
});
// 搜索的封装
app.factory('provdersearch',function () {
    return function ($scope,$state) {
        let starttime;
        let endtime;
        if($scope.article.dt1 instanceof Object){
            starttime = Date.parse($scope.article.dt1);
        }else{
            starttime =  $state.params.startAt;
        }
        if($scope.article.dt2 instanceof Object){
            endtime = Date.parse($scope.article.dt2);
        }else{
            endtime =  $state.params.endAt;
        }
        let time1 =  $scope.article.dt1 ? starttime : undefined;
        let time2 =  $scope.article.dt2 ? endtime : undefined;
        if(time1 ==  time2 && time2 != undefined) {
            time2 = 86399999 + parseInt(time2);
        }
        $state.go($state.current, {
            page: $scope.currentPage,
            type: $scope.article.searchType,
            status: $scope.article.searss,
            startAt: time1,
            endAt: time2,
        });

    }
});
// 其他乱七八糟的东西，比如搜索，打开日期选择器
app.factory('provderrest',function () {
    return function ($state,$scope,$location,searchTypes,searchStutes,$stateParams) {
        let article = $scope.article = {};
        article.searchType = $state.params.type;
        article.searss = $state.params.status;
        article.dt1 = parseInt($location.search().startAt);
        article.dt2 = parseInt($location.search().endAt);
        $scope.searchTypes = searchTypes;
        $scope.searchStutes =searchStutes;
        // 点击的时候，让这个日期选择器打开。
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        // 默认是不打开的。这是日期选择器
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };
        $scope._today = new Date();
        $scope.currentPage =  $stateParams.page ;
    }
});
// 获取文章列表的请求，已经封装起来了。
app.factory('provderGetEdit',function () {
    return function ($state,$scope,$rootScope,id,ArticleService,articletypes,industrys) {
        let edit = $scope.edit = {};
        if (id != undefined) {
            ArticleService.getArticle(id).then(function (resp) {
                $rootScope.resp = resp.data.data.article;
                edit.addtitle = $rootScope.resp.title;
                edit.addType = $rootScope.resp.type;
                edit.articleurl = $rootScope.resp.url;
                edit.industry = $rootScope.resp.industry || industrys[0].value;
                $scope.isimg = $rootScope.resp.img;
                console.log($rootScope.resp.img);
                $scope.txt.txt.html($rootScope.resp.content);
            });
        }else {
            edit.addType =articletypes[0].value;
            edit.industry =industrys[0].value;
        }
    }
});
// 王的编辑区
app.factory('provderWangedit',function () {
    return function ($rootScope) {
        let E = window.wangEditor;
        let editor = new E('#editor');
        editor.create();
        $rootScope.editor= editor;
    }
});
//登录部分的封装。
app.factory('provderlongin',function () {
    return function ($scope,$state,ArticleService) {
        let vm = this;
        let username;
        vm.params = {};
            vm.params.name = $scope.username;
            vm.params.pwd = $scope.password;
            ArticleService.longin(vm.params).then(
                function success(resp) {
                    let message= resp.data.message;
                    if (message == "success"){
                        document.cookie="name=back;"+username;
                        $state.go('backstage.wellcome');
                    }
                    else {
                        $scope.message = message;
                    }
                },
            );

    }
});
//侧边栏，手风琴，
app.factory('provdersaidebar',function () {
    return function ($scope,sidebar) {
        $scope.records =sidebar;
        $scope.status = {
            isCustomHeaderOpen: false,
            openss:false,
            opens: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
});
//  上传图片的组件。
app.factory('provderuploader',function () {
    return function ($scope,FileUploader) {
        var uploader = $scope.uploader = new FileUploader({
            url: '/carrots-admin-ajax/a/u/img/task'
        });
        uploader.queueLimit=1;
        uploader.onSuccessItem = function(fileItem, response,) {
            $scope.isimg = response.data.url;
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
            alert('你上传的文件大于2M，换小一点。'
            )
        };
    }
});