app.controller('flCtrl',function ($scope,$css,$http) {
		//添加home的css
		$css.removeAll();
		$css.add('./fl/css/fl.css');
		$http.get('./json/fl.json').success(function (data) {

			$scope.value = data;
		})

		var mySwiper = new Swiper ('.swiper-container', {
									direction: 'horizontal',//vertical垂直的
									loop: true,
									autoplay:2000,
									autoplayDisableOnInteraction:false,
									// 如果需要分页器
									pagination: '.swiper-pagination',

										// 如果需要前进后退按钮
										nextButton: '.swiper-button-next',
										prevButton: '.swiper-button-prev',

										// 如果需要滚动条
							//  					scrollbar: '.swiper-scrollbar',
							})

})
