app.controller('bdCtrl',function ($scope,$css,$http) {
		//添加home的css
		$css.removeAll();
		$css.add('./bd/css/bd.css');

		$http.get('./json/bangdan.json').success(function (data) {
			console.log(data.jmbd);
			$scope.value = data.jmbd;
			$scope.zb = data.zbbd;
		})
})
