$('.hero-slider-content-2').owlCarousel({
    loop: true,
    autoplay: true,
    nav:true,
    margin: 50,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            
        }
    }
})
$('.custom-slider').owlCarousel({
    // loop: true,
    margin: 10,
    // nav:true,
    
    autoplay:true,
    autoheight: false,
    autoplayTimeout:5000,
    loop:true,
    dots:true,
    nav:true,
    responsive: {
        0: {
            items:1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.first-big_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items:1,
    dots:true,
    autoplay:true,
    autoheight: false,
    // animateOut: 'fadeOut',
    // animateIn:'fadeIn'
})

$('.second-slider-2').owlCarousel({
 loop: true,
//  margin: 10,
//  nav: true,
 autoplay:true,
//  autoheight: false,
 responsive: {
     0: {
         items:1
     },
     600: {
         items: 3
     },
     1000: {
         items: 3
     }
 }
})
$('.video_guide_slide_main').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:true,
        // autoheight:off,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    $('.video_guide_slide_main-2').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        // autoheight:off,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    // $('.hero-slider-main-div').owlCarousel({
    //     loop:true,
    //     // margin:20,
    //     // nav:true,
    //     autoplay:true,
    //     items:1,
    //     animateOut: 'fadeOut',
        // autoheight:off,
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:1
        //     },
        //     1000:{
        //         items:1
        // //     }
        // }
    // })
   