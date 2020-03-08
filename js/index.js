$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        // nav:true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1500: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    // // Go to the next item
    // $('.customNextBtn').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })
    // // Go to the previous item
    // $('.customPrevBtn').click(function () {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     owl.trigger('prev.owl.carousel', [300]);
    // })
});