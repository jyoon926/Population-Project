$(document).ready(function(){
    //Parallax effect
    if ($(window).width() > 600) {
		var $bg = $('.bg');
		var $win = $(window);
		$win.on('scroll', function() {
			var top1 = -$win.scrollTop()/2;
			//$bg.css('top', '' + top1 + 'px');
			$bg.css('transform', 'scale(' + (1.4 + top1 / 1000) + ')');
			$bg.css('filter', 'saturate(0) opacity(' + (1 + top1 / 300) + ')');
		});
	}
});