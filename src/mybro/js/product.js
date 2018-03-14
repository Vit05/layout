(function () {

    $('.rate-btn').on('click', function () {
        var counter = $(this).prev().children().height()
        // console.log(counter)
        $(this).prev().children().height(counter + 1)


    })

    var product_video = $('#product_video')
    $('.product-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        before: function (slider) {
            $("#product_video").each(function () {
                $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            });
        }

    });
    $('.more-photo').on('click', function () {
        $(this).toggleClass('show');
        $('.flex-control-thumbs').toggleClass('show')
    });

    $('#tabs_link').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,

        itemWidth: 40,
        // itemMargin: 5,
        asNavFor: '#tabs_desccription'
    });

    $('#tabs_desccription').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        smoothHeight: true,
        sync: "#tabs_link"
    });
})();