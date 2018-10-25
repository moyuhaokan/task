app.factory('pathProject', function () {
        return {
            //这是获取整个文章列表的地址。
            getArticle_url:'/carrots-admin-ajax/a/article/search',
            //这是删除单个文章的地址。
            delArticle_url: function (id) {
                return "/carrots-admin-ajax/a/u/article/" + id;
            },
            //发送参数，进行文章的上下线。
            updownArticle: function (id,status) {
                return "/carrots-admin-ajax/a/u/article/status?id=" + id + "&status=" + status;
            },
            //编辑页面，获取单个ID的文章。
            getArticle_single: function (id) {
                return "/carrots-admin-ajax/a/article/" + id;
            },
            //新增页面，发送地址。
            postArticle:  "/carrots-admin-ajax/a/u/article",

            //编辑页面，发送文章地址。
            editArticle:  function (id) {
                return "/carrots-admin-ajax/a/u/article/" + id;
            },
            logintArticle: "/carrots-admin-ajax/a/login",
        }
    });


