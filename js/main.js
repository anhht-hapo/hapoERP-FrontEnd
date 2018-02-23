$(document).ready(function(){
    $('.feature-container').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });


    $('.slider-nav').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        asNavFor: '.comment-slider',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [{
            breakpoint: 998,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.comment-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
            }
        }]
    });
});
