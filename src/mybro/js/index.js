(function () {
    $("#play_video_btn").click(function() {
        var bool = $(".home_video").prop("muted");
        $(".home_video").prop("muted",!bool);
    });
    var swiper = new Swiper('.home_slider_for_case_item', {
        slidesPerView: 1,

        loop: true,
        pagination: {
            el: '.slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
        breakpoints: {

            420: {
                pagination: false
            }

        }
    });

    var sliderBuyItem = new Swiper('.home_slider_buy_item', {
        slidesPerView: 1,
        loop: false,

        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
    });
    if (window.innerWidth > 767) {
        var immg = document.querySelectorAll('.xzoom')
        elImg = Array.prototype.slice.call(immg)


        elImg.forEach(function (el, ind) {
            // console.log(ind, el)
            $(el).xzoom(
                {
                    position: 'lens',
                    // lensShape: 'circle',
                    sourceClass: 'xzoom-hidden'
                });
        })
    }


    var homeSliderReview = new Swiper('.home_slider_review', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev'
        },
        breakpoints: {

            768: {
                slidesPerView: 1
            },

        }
    });
})();

