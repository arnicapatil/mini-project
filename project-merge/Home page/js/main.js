    //----------------------OWL COURSEL JS----------------------------//
    <script>
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                responsiveClass: true,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                        dots: false
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 2,
                    }
                }
            });
    });
    </script>
    //------------------- END OF OWL COURSEL JS---------------------------//
//----- counter---//
        <script>
            $(document).ready(function () {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1200
                });
        });
        </script>
        //-----end of counter--//
//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
               
            }
        });
    }
   
// bubbles -----------------
   
   
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
   
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
})