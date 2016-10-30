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
				templateUrl:'./play/html/play.html',
				controller:'playCtrl'
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
		.when('/sou',{
			templateUrl:'./sou/html/sou.html',
			controller:'souCtrl'
		})
		//其他
		.otherwise({ // 类似于switch的default情况，上面不处理的话走这里
        redirectTo: '/' // 重定向到首页
    });
}]);
app.controller("CSScontroller", function ($scope) {
		$scope.flag1 = true;
		$scope.flag2 = false;
		$scope.flag3 = false;
		$scope.flag4 = false;
		$scope.stun = function () {
			$scope.flag1 = false;
			$scope.flag2 = false;
			$scope.flag3 = false;
			$scope.flag4 = false;
			$scope.flag1 = true;
			// alert(123);
			// console.log(this);
		}
		$scope.stun2 = function () {
			$scope.flag1 = false;
			$scope.flag2 = false;
			$scope.flag3 = false;
			$scope.flag4 = false;
			$scope.flag2 = true;
			// alert(123);
			// console.log(this);
		}
		$scope.stun3 = function () {
			$scope.flag1 = false;
			$scope.flag2 = false;
			$scope.flag3 = false;
			$scope.flag4 = false;
			$scope.flag3 = true;
			// alert(123);
			// console.log(this);
		}
		$scope.stun4 = function () {
			$scope.flag1 = false;
			$scope.flag2 = false;
			$scope.flag3 = false;
			$scope.flag4 = false;
			$scope.flag4 = true;
			// alert(123);
			// console.log(this);
		}
		$scope.stun5 = function () {
			$scope.flag1 = false;
			$scope.flag2 = false;
			$scope.flag3 = false;
			$scope.flag4 = false;
			// alert(123);
			// console.log(this);
		}
});
