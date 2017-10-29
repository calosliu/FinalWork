$().ready(
    function () {
        var pic_height = $('div.carousel-inner .carousel-item').first().height();
        $('div.carousel-inner .carousel-item').css('height', pic_height);
    }
)