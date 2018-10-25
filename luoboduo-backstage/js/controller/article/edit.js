
    //以上是上传图片的组件。

angular.module("myApp").controller("editCtrl",
    function(
        $scope,
        $rootScope,
        $state,
        $stateParams,
        FileUploader,
        industrys,
        articletypes,
        ArticleService,
        provderGetEdit,
        provderWangedit,
        provderuploader) {
        // 王的编辑器，以下
        let edit = $scope.edit = {};
        provderWangedit($rootScope);
        //这是传输进来的id。
        $scope.id = $state.params.id;
        $scope.txt =  $rootScope.editor;
        var id = $scope.id;
        // 获取文章列表的请求，已经封装起来了。
        provderGetEdit($state,$scope,$rootScope,id,ArticleService,articletypes,industrys)

        edit.industry =industrys[0].value;
        let vm = this;
        vm.editParams = {};
        $scope.online = function (x) {
            if ($rootScope.resp != undefined) {
                vm.editParams = $rootScope.resp;
            }
            vm.editParams.type = $scope.edit.addType;
            vm.editParams.content = $scope.txt.txt.html();
            vm.editParams.url = $scope.edit.articleurl;
            vm.editParams.industry = $scope.edit.industry;
            vm.editParams.img = $scope.isimg;
            vm.editParams.title = $scope.edit.addtitle;
            vm.editParams.status = x;
            if (x == 1) {
                var up = confirm("是否立即上传这个数据到服务器。");
            }else {
                var up =  confirm("是否上传这个草稿到服务器。");
            }
            if (up) {
                if ( $scope.id == undefined) {
                    ArticleService.postArticle(vm.editParams).then(function () {
                        alert('上传成功');
                        $state.go('backstage.article');
                    })

                }else {
                    ArticleService.editArticle($scope.id,vm.editParams).then(function () {
                        alert('编辑成功');
                        $state.go('backstage.article');
                    })
                }
            }
        };
        $scope.clearImg = function () {
            $scope.isimg = false;
        };
        $scope.cancel = function () {
            $state.go('backstage.article');
        };
        // 选择类型和行业。
        $scope.searchTypes = articletypes;
        $scope.industrys = industrys;
        //  上传图片的组件。
        provderuploader($scope,FileUploader);

    },
);

