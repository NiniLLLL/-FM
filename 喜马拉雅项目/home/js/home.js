app.controller('homeCtrl',function ($scope,$css) {
		//添加home的css
		$css.removeAll();
		$css.add('./home/css/home.css');
})
