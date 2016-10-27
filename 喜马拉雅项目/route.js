var app = angular.module('myApp',['ngRoute','angularCSS']);

app.config(['$routeProvider',function ($routeProvider){
		$routeProvider
		.when('/',{
				templateUrl:'./home/html/home.html',
				controller:'homeCtrl'
		})
		// 订阅的页面
		.when('/subscript',{
				templateUrl:'./subscript/html/subscript.html',
				controller:'subscriptCtrl'
		})
		//播放的页面
		.when('/play',{
				templateUrl:'./play/html/play.html'
		})
		//发现的页面
		.when('/finder',{
				templateUrl:'./finder/html/finder.html',
				controller:'finderCtrl'
		})
		//我的页面
		.when('/mine',{
				templateUrl:'./mine/html/mine.html',
				controller:'mineCtrl'
		})
		.when('/fl',{
			templateUrl:'./fl/html/fl.html',
			controller:'flCtrl'
		})
		.when('/tj',{
			templateUrl:'./tj/html/tj.html',
			controller:'tjCtrl'
		})
		.when('/bd',{
			templateUrl:'./bd/html/bd.html',
			controller:'bdCtrl'
		})
		.when('/zb',{
			templateUrl:'./zb/html/zb.html',
			controller:'zbCtrl'
		})
		//其他
		.otherwise({ // 类似于switch的default情况，上面不处理的话走这里
        redirectTo: '/' // 重定向到首页
    });
}])
