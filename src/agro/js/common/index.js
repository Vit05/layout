var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loop: true,
    // autoHeight: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            slidesPerGroup: 2,
            spaceBetween: 5,
        }
    }
});


$(window).scroll(function () {
   detectHeader()
});

function detectHeader() {
    var scroll = $(window).scrollTop();
    var vievportWidth = $(window).innerWidth();
    console.log(vievportWidth);
    var fixedHeader = $('.header');
    // var fixedScrollHeader = $('.header');

    if(vievportWidth > 767){
        if (scroll >= 300 ) {
            fixedHeader.addClass("fixed_header");
            // fixedScrollHeader.addClass("fade");
        } else {
            fixedHeader.removeClass("fixed_header");
            // fixedScrollHeader.removeClass("fade")

        }
    }else{
        fixedHeader.addClass("in");
        // fixedScrollHeader.addClass("fade");
    }
}
detectHeader()

//  MOBILE NAVIGATION
var mobNavBtn = $('#mobNavBtn');

mobNavBtn.on('click', function () {
    // $('.main-nav').toggleClass('show')
    var toggleMobileNav = $('.navigation');

    toggleMobileNav.toggleClass("in")
    mobNavBtn.children().toggleClass('active')
})