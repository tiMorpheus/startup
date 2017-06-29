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


    // ABOUT US CAROUSEL
    $('#about-us-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
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
    //----------------------------------

    // CLIENTS CAROUSEL

    $('#clients-carousel').owlCarousel({
        navigation : true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        slideSpeed : 400,
        pagination:false,
        items : 1,
        rewindNav: true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet:[768,3],    //As above.
        // itemsMobile:[479,2],
        itemsMobile:[320,1],
        stopOnHover:true,
        autoPlay:true
    });


    //----------------------------------


    //LATEST WORKS isotope

    var $container = $('.portfolio-wrap');
    var $filter = $('#isotope-filter');
    // Initialize isotope
    $container.isotope({
        filter: '*',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    // Filter items when filter link is clicked
    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('current');
        $(this).addClass('current');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    // portfolio isotope
    var container = $('.portfolio-wrap');

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-box').each(function () {
            $(this).css( {
                width : postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }




    $(window).bind('resize', function () {
        setProjects();
    });

//*-------------------------------------------

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle').click();
    });




});