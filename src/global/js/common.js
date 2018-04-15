document.addEventListener("DOMContentLoaded", function (event) {
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    if (w <= 768) {
        // console.log("tablet viewport")
        var advantagesSlider = new Swiper('.advantages-container', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                425: {
                    slidesPerView: 1,
                },
            }
        });
        var teamSlider = new Swiper('.team-slider', {
            slidesPerView: 2,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                425: {
                    slidesPerView: 1,
                },
            }
        });


        $('.lng-mob').on("click", function () {
            $('.lng-cont').fadeToggle()
        })
        $(document).click(function (event) {
            if (!$(event.target).closest(".lng-mob, .lng-cont").length) {
                $(".lng-cont").hide();
            }
        });
    }
    else {
        // console.log("Desktop viewport")

        //PARALLAX
        $(window).bind('scroll', function (e) {
            parallaxScroll();
        });
        function parallaxScroll() {
            var scrolled = $(window).scrollTop();
            $('#parallax-bg1').css('background-position', 'center ' + (-100 - (scrolled * .1)) + 'px');
            $('#parallax-bg2').css('background-position', 'center ' + (-100 - (scrolled * .1)) + 'px');
            $('#parallax-bg3').css('background-position', 'center ' + (300 - (scrolled * .1)) + 'px');
        }
        withinViewport()
    }

    //REVIEWS
    var slideCount = $('.reviews-item').length;
    var slideReviews = new Swiper('.slider-reviews', {
        slidesPerView: 1,
        loop: true,
        autoHeight: true,
        loopedSlides: slideCount,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-review-next',
            prevEl: '.swiper-review-prev',
        }
    });
    var reviews_item_nodes = Array.prototype.slice.call($('.reviews-item'));
    reviews_item_nodes.forEach(function callback(currentValue, index, array) {
            reviews_item_nodes[index].addEventListener('click', function () {
                    $('.slider-reviews').addClass("setHeightSlider")
                    $('.reviews-item:eq(' + index + ')').addClass('active')

                    slideReviews.slideTo(index, 700, false);
                    slideReviews.on('slideChange', function () {
                        $('.reviews-item').removeClass('active')
                        $('.reviews-item:eq(' + slideReviews.activeIndex % slideCount + ')').addClass('active')

                    });

                }
            )
        }
    )



    //TABS AND MAP
    $('#tab_content .tab-item-container').hide();
    $('#tab_content .tab-item-container:first').show();
    var newlat = $("#tab_nav li").attr("data-lat")
    var newlng = $("#tab_nav li").attr("data-lng")
    if ($(window).width() < 768) {
        $('.tab-nav-mob').on("click", function () {
            $('#tab_nav').fadeToggle()
        })
        $(document).click(function (event) {
            if (!$(event.target).closest("#tab_nav, .tab-nav-mob").length) {
                $("#tab_nav").hide();
            }
        });
    }


    $('#tab_nav li').on("click", function () {
        if ($(window).width() < 768) {
            $('#tab_nav').hide()
        }
        var active_title = $(this).text();
        $('.tab-nav-title').text(active_title)
        newlat = $(this).attr("data-lat")
        newlng = $(this).attr("data-lng")
        var mapPosition = [newlat, newlng]
        $('#tab_nav li').removeClass("active-tab-link");
        $(this).addClass("active-tab-link");
        $('#tab_content .tab-item-container').hide();

        var indexer = $(this).index();
        $('#tab_content .tab-item-container:eq(' + indexer + ')').show();

        initMap(Number(newlat), Number(newlng));
    });

});


var initMap = function(lt ,ln) {

    var uluru = {
        lat: lt || 55.7453675,
        lng: ln || 52.38485820000005
    };
    var map = new google.maps.Map(document.getElementById('g_map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
var withinViewport = function () {

    if (window.requestAnimationFrame && document.documentElement.classList) {

        // Passes the test so add enhanced class to HTML tag
        document.documentElement.classList.add('enhanced');

        // Throttle
        // https://underscorejs.org/#throttle
        var throttle = function (func, wait, options) {
            var _ = {
                now: Date.now || function () {
                    return new Date().getTime();
                }
            };
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) {
                options = {};
            }
            var later = function () {
                previous = options.leading === false ? 0 : _.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) {
                    context = args = null;
                }
            };
            return function () {
                var now = _.now();
                if (!previous && options.leading === false) {
                    previous = now;
                }
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        };

        // requestAnimationFrame
        // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
        var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;

        // Global class for revealing element
        var revealer = document.querySelectorAll('.revealer');

        // Get the viewport (window) dimensions
        var getViewportSize = function () {
            return {
                width: window.document.documentElement.clientWidth,
                height: window.document.documentElement.clientHeight
            };
        };

        // Get the current scoll position
        var getCurrentScroll = function () {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            };
        };

        // Get element dimensions and position
        var getElemInfo = function (elem) {
            var offsetTop = 0;
            var offsetLeft = 0;
            var offsetHeight = elem.offsetHeight;
            var offsetWidth = elem.offsetWidth;

            do {
                if (!isNaN(elem.offsetTop)) {
                    offsetTop += elem.offsetTop;
                }
                if (!isNaN(elem.offsetLeft)) {
                    offsetLeft += elem.offsetLeft;
                }
            } while ((elem = elem.offsetParent) !== null);

            return {
                top: offsetTop,
                left: offsetLeft,
                height: offsetHeight,
                width: offsetWidth
            };
        };

        // Check visibility of the element in the viewport
        var checkVisibility = function (elem) {
            var viewportSize = getViewportSize();
            var currentScroll = getCurrentScroll();
            var elemInfo = getElemInfo(elem);
            var spaceOffset = 0.2;
            var elemHeight = elemInfo.height;
            var elemWidth = elemInfo.width;
            var elemTop = elemInfo.top;
            var elemLeft = elemInfo.left;
            var elemBottom = elemTop + elemHeight;
            var elemRight = elemLeft + elemWidth;

            var checkBoundaries = function () {
                // Defining the element boundaries and extra space offset
                var top = elemTop + elemHeight * spaceOffset;
                var left = elemLeft + elemWidth * spaceOffset;
                var bottom = elemBottom - elemHeight * spaceOffset;
                var right = elemRight - elemWidth * spaceOffset;

                // Defining the window boundaries and window offset
                var wTop = currentScroll.y + 0;
                var wLeft = currentScroll.x + 0;
                var wBottom = currentScroll.y - 0 + viewportSize.height;
                var wRight = currentScroll.x - 0 + viewportSize.width;

                // Check if the element is within boundary
                return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
            };

            return checkBoundaries();
        };

        // Run a loop with checkVisibility() and add / remove classes to the elements
        var toggleElement = function () {
            for (var i = 0; i < revealer.length; i++) {
                if (checkVisibility(revealer[i])) {
                    revealer[i].classList.add('revealed');
                } else {
                    revealer[i].classList.remove('revealed');
                }
            }
        };

        // Throttle events and requestAnimationFrame
        var scrollHandler = throttle(function () {
            _requestAnimationFrame(toggleElement);
        }, 300);

        var resizeHandler = throttle(function () {
            _requestAnimationFrame(toggleElement);

            // For demo purposes only
            fullscreenIntro();
        }, 300);

        scrollHandler();

        // Listening for events
        if (window.addEventListener) {
            addEventListener('scroll', scrollHandler, false);
            addEventListener('resize', resizeHandler, false);
        } else if (window.attachEvent) {
            window.attachEvent('onscroll', scrollHandler);
            window.attachEvent('onresize', resizeHandler);
        } else {
            window.onscroll = scrollHandler;
            window.onresize = resizeHandler;
        }

    }

    var fullscreenIntro = function () {
        var fullscreen = document.querySelectorAll('.fullscreen');
        for (var i = 0; i < fullscreen.length; i++) {
            fullscreen[i].style.height = getViewportSize().height + 1 + 'px';
        }
    };
    fullscreenIntro();

    // return withinViewport;

};