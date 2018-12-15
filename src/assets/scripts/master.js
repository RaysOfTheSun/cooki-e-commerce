import 'jquery/dist/jquery.slim';
import 'bootstrap';

$(window).ready(function () {
    let mql = window.matchMedia("screen and (max-width: 1024px)");
    let $body = $('body');
    $($body).hide();
    $($body).fadeIn(1000);
    $('.no-flash').removeClass('no-flash');
    $('#loader').delay(2500).fadeOut(() => {
        $("html, body").animate({scrollTop: 0}, 400);
        $('#notch').toggleClass('nav-notch-hidden'); // have the navigation bar slide down from the top
        $('#landing-text').toggleClass('opacity-0'); // fade out the landing div's text
    });


    $('a').on('click', (e) => {
        e.preventDefault();
        if (e.target.getAttribute('href') !== '#') {
            $('body').fadeOut(() => {
                window.location.href = $(e.target).attr('href')
            })
        }
    });

    mediaQueryResponse(mql); // call listener function explicitly at run time

    // footer stuff
    mql.addEventListener('change', mediaQueryResponse);  // attach listener function to listen in on state changes

    function mediaQueryResponse(mql) {
        if (mql.matches) {
            $(".taber").attr("data-toggle", "collapse");
            $('.panel-collapse').collapse("hide");
        } else {
            $('#engagement-container').css({'transform': ''});
            $('.panel-collapse').collapse("show");
            $(".taber").removeAttr("data-toggle");
        }
    }
});