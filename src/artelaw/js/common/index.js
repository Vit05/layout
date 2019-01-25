var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var fixedHeader = $('.fixed_header.fade');
    var fixedScrollHeader = $('.header');

    if (scroll >= 200) {
        fixedHeader.addClass("in");
        fixedScrollHeader.addClass("fade");
    } else {
        fixedHeader.removeClass("in");
        fixedScrollHeader.removeClass("fade")
    }
});


//  MOBILE NAVIGATION
var mobNavBtn = $('#mobNavBtn');

mobNavBtn.on('click', function () {
    // $('.main-nav').toggleClass('show')
    var fixedScrollHeader = $('.header');

    fixedScrollHeader.toggleClass("in")
    mobNavBtn.children().toggleClass('active')
})