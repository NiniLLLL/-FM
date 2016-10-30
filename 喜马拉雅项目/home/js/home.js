app.controller('homeCtrl',function ($scope,$css,$http) {
		//添加home的css
		$css.removeAll();
		$css.add('./home/css/home.css');

			//动态获取数据
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

							$http.get('json/home.json').success(function (data){
									console.log(data.like);
									$scope.value = data.like;
									$scope.mon = data.money;
									$scope.tui = data.tuijian;
							})


})
