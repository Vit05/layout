var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    // effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

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

    if (vievportWidth > 767) {
        if (scroll >= 300) {
            fixedHeader.addClass("fixed_header");
            // fixedScrollHeader.addClass("fade");
        } else {
            fixedHeader.removeClass("fixed_header");
            // fixedScrollHeader.removeClass("fade")

        }
    } else {
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






var validatorForm = $("#callBackForm").validate({
    errorClass: "invalid",
    submitHandler: function (form) {
        closePopup();
        $(form).submit();
    }
});


$('.show__popup').on('click', function (event) {
    event.preventDefault();
    $('.popup_overlay').addClass('in');
    $('body').addClass('hidden');
});
var closePopup = function () {
    $('.close__popup').on('click', function (event) {
        event.preventDefault();
        $('.popup_overlay').removeClass('in');
        $('body').removeClass('hidden');
        validatorForm.resetForm();

    })
}
closePopup();



