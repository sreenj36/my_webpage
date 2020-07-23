$(document).ready(function() {
    /* sticky navigation*/
    
    $('.js--section-features').waypoint(function(direction) {
        
        if (direction == "down") {
            $('nav').addClass('sticky');
            
        } else {
            $('nav').removeClass('sticky');
        }
        }, {
         offset: '60px;'
       });
    
    /* button scroll */
    
    $('.js--info').click(function () {
        
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        
        
    });
    
    /*navigation scroll settingup */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* scroll animation*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
   
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated zoomInDown');
    }, {
        offset: '50%'
    });
    
 
    


   });

    


   
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
   */ 
    
    
