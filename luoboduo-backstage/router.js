var app = angular.module('myApp', ['ui.router','oc.lazyLoad','ngAnimate', 'ngMessages','ngSanitize', 'ui.bootstrap','angularFileUpload']);
app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');
    $stateProvider
        .state("login", {
            url: '/login',
            controller:'loginCtrl',
            templateUrl: 'views/login.html',
            resolve : {
                loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controller/loginCtrl.js','css/login.css']
                    })
                }]
            }
        })

        .state("backstage.wellcome", {
            url: '/wellcome',
            template: 'wellcome to 萝卜多后台管理系统',
        })
        .state("backstage", {
            url: '/backstage',
            controller:'backstageCtrl',
            templateUrl: 'views/backstage.html',
            resolve : {
                loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controller/backstageCtrl.js','css/backstage.css']
                    })
                }]
            }
        })
        .state("backstage.article", {
            url: '/backstage/article?:page,type,status,endAt,startAt',
            controller:'articleCtrl',
            templateUrl: 'views/article.html',
            resolve : {
                loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controller/article/articleCtrl.js',"js/service/Filter.js",'css/article.css']
                    })
                }]
            }
        })
        .state("backstage.append", {
            url: '/append',
            templateUrl: 'views/append.html',
            controller:"editCtrl",
            resolve : {
                loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controller/article/edit.js','css/append.css']
                    })
                }]
            }
        })
        .state("backstage.edit",{
            url: '/edit?:id',
            templateUrl: 'views/edit.html',
            controller: 'editCtrl',
            resolve : {
                loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controller/article/edit.js','css/edit.css']
                    })
                }]
            }
        })
});
