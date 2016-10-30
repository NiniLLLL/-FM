app.controller('subscriptCtrl',function ($scope,$css,$http) {
		//添加home的css
		$css.removeAll();
		$css.add('./subscript/css/subscript.css');
		$http.get('./json/dingyue.json').success(function (data) {
				console.log(data.data);
				$scope.value = data.data;			
		})
})
