app.controller('playCtrl',function ($scope, $css, $http, $location,$anchorScroll) {
	$css.removeAll();
	$css.add('./play/css/play.css');
	// 请求数据
	$http.get('http://localhost:8888/json/zhubo.json').success(function (data) {
		$scope.data = data.zhubo;
		$scope.zhuanji = data.zhuanji;
		// console.log(data.zhubo)
	});

	// 实现锚点的跳转
	// $scope.gotoAnchor = function () {
	// 	$location.hash('anchor1')
	// 	 $anchorScroll();
	// }

	$('#xf_player header a').on('click', function () {
		if($(this).hasClass('hide_show')){
			$(this).attr({
				'href' : '#/home'
			});
			$("#xf_player").hide();
			$('.xf_list').hide();
		}

	});
	$('.playContainer').on("scroll", function () {
		//滚动背景色
		var top = $('.playContainer').scrollTop();
		$("#xf_player header").css({
			'background' : 'rgba(255,255,255,'+ (top * 0.002) +')'
		});
		//head显示隐藏
		if(top > 470) {
			$('#xf_player header>a img').attr({src:"play/imgs/shang.png"});
			$('#xf_player header>a').removeClass('hide_show');
			$scope.gotoAnchor = function () {
				$location.hash('anchor1')
				 $anchorScroll();
			}
			$("#xf_player header div:nth-child(2)").show();
			$("#xf_player header>div:nth-child(3) img:first-child").attr({src:"play/imgs/share2.png"});
			$("#xf_player header>div:nth-child(3) img:last-child").attr({src:"play/imgs/shenglue2.png"});
		} else{
			$('#xf_player header>a img').attr({src:"play/imgs/xia.png"});
			$('#xf_player header>a').addClass("hide_show");
			$scope.gotoAnchor = null;
						// 整体消失事件


			$("#xf_player header div:nth-child(2)").hide();
			$("#xf_player header>div:nth-child(3) img:first-child").attr({src:"play/imgs/share.gif"});
			$("#xf_player header>div:nth-child(3) img:last-child").attr({src:"play/imgs/shenglue.gif"});
		}

	});

	//点赞
	$("#xf_player .video_top>section div:first-child").on('click', function () {
		if ($(this).hasClass('dianguo')) {
			var num =$(this).find('span').html();
			num--;
			console.log(num)
			$(this).find('span').html(num);
			$("#xf_player .tixing").html("您刚刚取消点赞");
			$("#xf_player .tixing").slideDown(1000, function () {
				$("#xf_player .tixing").delay(500).slideUp(300);
			});
			$(this).addClass("meidian").removeClass("dianguo");

		} else if ($(this).hasClass('meidian')) {
			var num =$(this).find('span').html();
			num++
			$(this).find('span').html(num);

			$("#xf_player .tixing").html("谢谢您的点赞！么么哒。");
			$("#xf_player .tixing").slideDown(1000, function () {
				$("#xf_player .tixing").delay(500).fadeOut(300);
			});
			$(this).addClass("dianguo").removeClass('meidian');
		};
	});

		//播放
		var music = ['music/1.mp3','music/2.mp3','music/3.mp3','music/4.mp3'];
		var img = {
			play:'play/imgs/playee.png',
			ting:'play/imgs/zhanting.png'
		}
		var imge = {
			play:'play/imgs/album_pause.png',
			pause:'play/imgs/album_play.png'
		}
		$('.video_bottom>div:nth-child(3) img').click(function () {
					isPlay();
		})

		$('.video_bottom>div:nth-child(4) img').click(function () {
					index++;
					if (index > 3) {
						index = 0;
					}
					flag = false;
					isPlay();
		})

		$('.video_bottom>div:nth-child(2) img').click(function () {
					index--;
					if (index <0) {
						index = 3;
					}
					flag = false;
					isPlay();
		})
			var flag = false;
			var index = 0;
		//播放暂停函数函数
			function isPlay() {
				flag = !flag;
				if (flag == true) {
						//换图片
						// 播放暂停歌曲
						$('.video_bottom>div:nth-child(3) img').attr('src',img.play);
						$('audio').attr('src',music[index]);
						$('audio')[0].play();
						$('audio')[0].onended = function () {
									index++;
									if (index > 4) {
										index = 0;
									}
									$('audio').attr('src',music[index]);
									$('audio')[0].play();
						}
						$('.xf_show img').attr('src',imge.play);
						$('.xf_show span').css("animation-play-state","running");
						$('.playwrap img').addClass('roll');
				}else{
						$('.video_bottom>div:nth-child(3) img').attr('src',img.ting);
						$('.xf_show img').attr('src',imge.pause)
						$('audio')[0].pause();
						$('.xf_show span').css("animation-play-state","paused");
						$('.playwrap img').removeClass('roll');
				}


			}

			$('.xf_show img').click(function () {
						isPlay();
			})

			var flagg = false;
			$('.slide').click(function () {
					flagg = !flagg;
					if (flagg == true) {
						$('#xf_player').css('transform','translateX(80%)');
						$('#xf_player header').css('transform','translateX(-80%)');
						$("#xf_player header div:nth-child(2)").hide();

					}else {
						$('#xf_player').css('transform','translateX(0px)');
						$('#xf_player header').css('transform','translateX(0)');
						// $("#xf_player header div:nth-child(2)").show();

					}
					$('.playContainer').on('scroll', function () {
						// $("#xf_player header div:nth-child(2)").show();

						var sc_top = $('.playContainer').scrollTop();
						$('#xf_player header').css({
							'top' : sc_top + "px"
						});

						$('#xf_player').css({
							'top' : 0 + "px",
							'left': 0 + "px"
						});
						$('#xf_player header').css('position','fixed')
						// console.log($(window).scrollTop());
						// $('#xf_player').scrollTop(0);

					})
			})

			$('.timeout').click(function () {
				alert('欢迎加入我们公司，看好你哦');
			})

			var hei = $(window).height();
				console.log(hei);

			$('.list_container').css({
				'height' : hei,
				'overflow-y':'scroll'
			})

			$('.playContainer').css({
				'height' : hei,
				'overflow-y':'scroll'
			})

			$('html').css({
				'height' : hei,
			})

			//点击换图片 事件代理
			$('main').on('click','.main-list',function () {
				var src = $(this).find('img').attr('src');
				$('#xf_player .video_top').css({
					'background-image':'url(' + src + ')'
				})
				flag = false;
				isPlay();
			})

			//左边侧翼列表的切换 事件代理
			var pramer='';
			$('.xf_list').on('click','.zhuanji',function () {
				var src = $(this).find('img').attr('src');
				console.log(pramer);
				if (pramer == src) {
					return;
				}else {
					flag = false;
					isPlay();
				}
				$('#xf_player .video_top').css({
					'background-image':'url(' + src + ')'
				})
				pramer = src;
			})

})
