jQuery(document).ready(function() {
    
    jQuery('.scene').parallax({
    	frictionX: 0.1,
  		frictionY: 0.1,
    });

    jQuery(".fit-1").fitText(0.55, { minFontSize: '25px' });
    jQuery(".fit-2").fitText(1, { minFontSize: '10px' });

    // var transparentVideo = seeThru.create('#my-video');

    var currentBackground = 0;
    var backgrounds = [];
    backgrounds[0] = '/wp-content/themes/john_nichols/img/profile/2.png';
    backgrounds[1] = '/wp-content/themes/john_nichols/img/profile/3.png';
    backgrounds[2] = '/wp-content/themes/john_nichols/img/profile/4.png';
    backgrounds[3] = '/wp-content/themes/john_nichols/img/profile/5.png';
    backgrounds[4] = '/wp-content/themes/john_nichols/img/profile/6.png';
    backgrounds[5] = '/wp-content/themes/john_nichols/img/profile/7.png';
    backgrounds[6] = '/wp-content/themes/john_nichols/img/profile/8.png';

    for (var i = 0; i < backgrounds.length; i++) {
    	jQuery('body').append('<div style="background-image: url('+ backgrounds[i] +'); display: none;"></div>')
    };

    function changeBackground() {
        currentBackground++;
        if(currentBackground > 7) currentBackground = 0;

        jQuery('.profileImg.overlay').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
    }

    jQuery('a').mouseover(function() {
    	console.log('mouseover');
    	glitch = setInterval(changeBackground, 100);

    	jQuery('.profileImg.overlay').css({
    	    'opacity' : 1
    	});
    });
    jQuery('a').mouseout(function() {
    	console.log('mouseout');
    	jQuery('.profileImg.overlay').css({
    	    'opacity' : 0
    	});
    	clearInterval(glitch);
    });

});

