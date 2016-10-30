app.controller('tjCtrl',function ($scope,$css) {
		//添加home的css
		$css.removeAll();
		$css.add('./tj/css/tj.css');

		// 消失与隐藏的属性
		$scope.flag = false;
		$scope.hid = function () {
			$scope.flag = !$scope.flag
		}
})
