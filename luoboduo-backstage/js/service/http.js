app.factory('ArticleService', function ($http, pathProject) {
        return {
            //获取文章列表的地址。
            getArticlelist: function (params) {
              return $http.get(pathProject.getArticle_url,{params: params});
            },
            //这是删除的函数。
            delArticle: function (id) {
                return $http.delete(pathProject.delArticle_url(id));
            },
            unDownArticle: function (id,stutas) {
                return $http.put(pathProject.updownArticle(id,stutas))
            },
            //编辑页面，获取单个文章的的函数 。
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_single(id))
            },
            //新增页面，发送的地址。
            postArticle: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.postArticle,
                    params:params,
                })
            },
            //编辑页面，发送的地址和请求。
            editArticle: function (id,params) {
                return $http({
                    method:'put',
                    url: pathProject.editArticle(id),
                    params:params,
                })
            },
            longin: function (params) {
                return $http({
                    method:"POST",
                    url:pathProject.logintArticle,
                    params:params,
                })
            }
        }
    });



