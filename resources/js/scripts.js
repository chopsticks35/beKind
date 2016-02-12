$(document).ready(function() {
    
//    sticky navigation  bar
    $('.js--section-features').waypoint(function(direction) {
         
            if (direction == "down") {
               $('nav').addClass('sticky'); 
            }
            
        else {
            $('nav').removeClass('sticky');
        }
    },
        {
            offset: '60px;'
    });
    
//  scrolling buttons
    $('.js--scroll-to-action').click(function() {
        $('html, body').animate({scrollTop: $('.js--action-section').offset().top}, 1000);
    });
    
    $('.js--scroll-to-widget').click(function() {
        $('html, body').animate({scrollTop: $('.js--widget-app-section').offset().top}, 1000);
    });
    
//    scrolling navigation bar
    $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
        return false;
        }
        }
    });
});
    
//    scrolling animations
    $('.js--waypoint-features').waypoint(function(direction){
        $('.js--waypoint-features').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--waypoint-photo').waypoint(function(direction){
        $('.js--waypoint-photo').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--waypoint-retail').waypoint(function(direction){
        $('.js--waypoint-retail').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--waypoint-action').waypoint(function(direction){
        $('.js--waypoint-action').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
//    mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(1000);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


//  maps - jquery plug in

    new GMaps({
        
      div: '.map',
      lat:  39.812769,
      lng: -105.035159
    });
});