$(window).ready(function () {
    let mql = window.matchMedia("screen and (max-width: 1024px)");
    $('.no-flash').removeClass('no-flash');
    $('#loader').delay(3000).fadeOut(() => {
        $("html, body").animate({scrollTop: 0}, 400);
        $('#notch').toggleClass('nav-notch-hidden'); // have the navigation bar slide down from the top
        $('#landing-text').toggleClass('opacity-0'); // fade out the landing div's text
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

    // global cart sidebar stuff
    $('#cart-button').on('click', (e) => {
        $('#cart-side').toggleClass('active');
        $('.near-sidebar').toggleClass('active');
        $('#cart-side.active').on('click', (e) => {
            if (e.target.id === "cart-side") {
                $('#cart-side.active').toggleClass('active');
                $('.near-sidebar.active').toggleClass('active');
            }
        });

        $('.near-sidebar.active').on('click', () => {
            $('#cart-side.active').toggleClass('active');
            $('.near-sidebar.active').toggleClass('active');
        });
        e.preventDefault();
    });

});