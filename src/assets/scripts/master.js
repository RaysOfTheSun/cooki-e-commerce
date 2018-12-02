$(window).ready(function () {
    let mql = window.matchMedia("screen and (max-width: 1024px)");
    let currSeekWidth = 270;
    let currIndicator = 0;
    let prevIndicator = -1;
    let $indicators = $('.indicator');
    $('.no-flash').removeClass('no-flash');
    $('#loader').delay(3000).fadeOut(() => {
        $("html, body").animate({scrollTop: 0}, 400);
    });
    $('#notch').toggleClass('nav-notch-hidden'); // have the navigation bar slide down from the top
    $('#landing-text').toggleClass('opacity-0'); // fade out the landing div's text

    mediaQueryResponse(mql); // call listener function explicitly at run time

    // handle the navigation of the engagement cards on a smaller viewport
    $('#engagement-nav-backward').on('click', function () {
        // make sure the user can't scroll passed the first item in the list
        currSeekWidth = (currSeekWidth + 270) > 270 ? 270 : currSeekWidth + 270;
        currIndicator = currIndicator - 1 > 0 ? currIndicator - 1 : 0;
        prevIndicator = currIndicator < $($indicators).length ? currIndicator + 1 : currIndicator;
        $($indicators[prevIndicator]).removeClass('active');
        $($indicators[currIndicator]).addClass('active');
        $('#engagement-container').css({'transform': `translate3d(${currSeekWidth}px, 0 , 0)`});
    });

    $('#engagement-nav-forward').on('click', function () {
        // make sure the user can't scroll past the last item in the list
        currSeekWidth = (currSeekWidth - 270) >= -270 ? currSeekWidth - 270 : -270;
        currIndicator = currIndicator < $($indicators).length - 1 ? currIndicator + 1 : currIndicator;
        prevIndicator = currIndicator - 1 > 0 ? currIndicator - 1 : 0;
        $($indicators[prevIndicator]).removeClass('active');
        $($indicators[currIndicator]).addClass('active');
        $('#engagement-container').css({'transform': `translate3d(${currSeekWidth}px, 0 ,0)`});
    });

    // footer stuff
    mql.addEventListener('change', mediaQueryResponse);  // attach listener function to listen in on state changes

    function mediaQueryResponse(mql) {
        if (mql.matches) {
            // currIndicator = 1;
            // prevIndicator = 0;
            $(".taber").attr("data-toggle", "collapse");
            $('.panel-collapse').collapse("hide");
            $($indicators[currIndicator]).toggleClass('active');
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