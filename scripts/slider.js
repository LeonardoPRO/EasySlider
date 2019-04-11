// Slider script
$(document).ready(function () {

    // делаем активной точку при клике
    $('.slider_points_container').on('click', '.slider_points', function () {
        $('.slider_points').removeClass('actived');
        $(this).addClass('actived');
    })

    // ===== Переключение слайдов =====

    var dontClick = 0; // флаг - возможность клика открыта
    var count = 1; // счетчик кликов по стрелкам
    // arrow left
    $('.slider_container').on('click', '#arrow_left', function () {
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик
        count++; // считаем клики
        dontClick = 1; // блокируем клик до лучших времен

        $(this).siblings('.slider').find('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        if (count == 1) {
            $('.slider_points').removeClass('actived');
            $('.point_1').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide1');
        }
        if (count == 2) {
            $('.slider_points').removeClass('actived');
            $('.point_2').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide2');
        }
        if (count == 3) {
            $('.slider_points').removeClass('actived');
            $('.point_3').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide3');
        }
        if (count == 4) {
            $('.slider_points').removeClass('actived');
            $('.point_4').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide4');
        }
        if (count > 4) { // если больше 3 раз нажали
            count = 1;
            $('.slider_points').removeClass('actived');
            $('.point_1').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide1');
        }


        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)

    })

    // arrow right
    $('.slider_container').on('click', '#arrow_right', function () {
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик

        count--;
        dontClick = 1; // блокируем клик до лучших времен

        $(this).siblings('.slider').find('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        if (count == 1) {
            $('.slider_points').removeClass('actived');
            $('.point_1').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide1');
        }
        if (count == 2) {
            $('.slider_points').removeClass('actived');
            $('.point_2').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide2');
        }
        if (count == 3) {
            $('.slider_points').removeClass('actived');
            $('.point_3').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide3');
        }
        if (count == 4) {
            $('.slider_points').removeClass('actived');
            $('.point_4').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide4');
        }
        if (count < 1) { // если больше 3 раз нажали
            count = 4;
            $('.slider_points').removeClass('actived');
            $('.point_4').addClass('actived');
            $(this).siblings('.slider').find('.slider_imgs_wrap').addClass('item_slide4');
        }


        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)

    })

    // Переключение слайдов по пойнтам
    $('.slider_points_container').on('click', '.point_1', function () {
        count = 1;
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик
        dontClick = 1; // блокируем клик до лучших времен
        $('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        $('.slider_imgs_wrap').addClass('item_slide1');
        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)
    })
    $('.slider_points_container').on('click', '.point_2', function () {
        count = 2;
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик
        dontClick = 1; // блокируем клик до лучших времен
        $('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        $('.slider_imgs_wrap').addClass('item_slide2');
        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)
    })
    $('.slider_points_container').on('click', '.point_3', function () {
        count = 3;
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик
        dontClick = 1; // блокируем клик до лучших времен
        $('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        $('.slider_imgs_wrap').addClass('item_slide3');
        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)
    })
    $('.slider_points_container').on('click', '.point_4', function () {
        count = 4;
        if (dontClick == 1) return; // если 1, то выходим из метода и блокируем клик
        dontClick = 1; // блокируем клик до лучших времен
        $('.slider_imgs_wrap').removeClass('item_slide1 item_slide2 item_slide3 item_slide4');
        $('.slider_imgs_wrap').addClass('item_slide4');
        setTimeout(function () {
            dontClick = 0 // возобновляем возможность клика через определенный таймаут
        }, 501)
    })

// Инвертируем тему
$('.center').on('click', '#invert', function () {
    $('body').toggleClass('invert');
})

})