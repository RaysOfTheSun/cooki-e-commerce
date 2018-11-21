$(window).ready(() => {
    $('.body-content').hide();

});

// since everything is all loaded up, set all the stuff up
$(window).on('load', function () {
    let currSeekWidth = 270;
    $('#loader').delay(300).fadeOut();
    $('.body-content').show();
    $('#notch').toggleClass('nav-notch-hidden'); // have the navigation bar slide down from the top
    $('#landing-text').toggleClass('hidden'); // fade out the landing div's text

    // collapsed navbar auto expands for some screen sizes. I have no idea why.
    // Prevent this from happening by removing the "show" class once the page loads.
    if($('.dual-nav').hasClass('show')){
        $('.dual-nav').toggleClass('show');
    }

    // handle the navigation of the engagement cards on a smaller viewport
    $('#engagement-nav-backward').on('click', function() {
        currSeekWidth = (currSeekWidth + 270) > 270 ? 270 : currSeekWidth + 270;
        $('#engagement-container').css({'transform': `translate3d(${currSeekWidth}px, 0 , 0)`});
    });

    $('#engagement-nav-forward').on('click', function() {
        currSeekWidth = (currSeekWidth - 270) >= -270 ? currSeekWidth - 270 : -270;
        $('#engagement-container').css({'transform': `translate3d(${currSeekWidth}px, 0 ,0)`});
    });

    // footer stuff
    let mql = window.matchMedia("screen and (max-width: 723px)");
    mediaqueryresponse(mql); // call listener function explicitly at run time
    mql.addEventListener('change', mediaqueryresponse);  // attach listener function to listen in on state changes

    function mediaqueryresponse(mql) {
        if (mql.matches) {
            $(".taber").attr("data-toggle", "collapse");
            $('.collapse').collapse("hide");
        } else {
            $('#engagement-container').css({'transform': ''});
            $('.collapse').collapse("show");
            $("[data-toggle='collapse']").removeAttr("data-toggle");
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