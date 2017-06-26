$(document).ready(function () {

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // painting services icons
    $(".service-item").on("mouseenter", function () {
        $(this).find(".icons").addClass("service-icon-hover");
        $(this).find(".icons").addClass("spinning");

    });

    $(".service-item").on("mouseleave", function () {

        $(this).find(".icons").removeClass("service-icon-hover");
        $(this).find(".icons").removeClass("spinning");

    });

    $(".navbar-toggle").on("click", function () {
        var button = $(this).find("i");

        if (button.hasClass("fa-bars")) {
            button.removeClass("fa-bars").addClass("fa-times");
        } else {
            button.removeClass("fa-times").addClass("fa-bars");

        }
    });

    $('.decorative-line').viewportChecker({
        classToAdd: 'animated slideInLeft', // Class to add to the elements when they are visible,
        offset: 100, // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
        repeat: true // Add the possibility to remove the class if the elements are not visible
    });


    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 60;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 350);
        e.preventDefault()
    });


// Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true, // Show next and prev buttons
        // navigationText: ["prev","next"],
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:4
            }
        }
    });

});