$(window).load(function(){
    // Swiper Clients
    var swiper = new Swiper('.swiper-clients', {
        slidesPerView: 5,
        spaceBetween: 40,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

});