$(document).ready(function () {

    var mql = window.matchMedia("screen and (max-width: 768px)")
    mediaqueryresponse(mql) // call listener function explicitly at run time
    mql.addListener(mediaqueryresponse) // attach listener function to listen in on state changes

    function mediaqueryresponse(mql) {
        if (mql.matches) {
            $(".taber").attr("data-toggle", "collapse");
            $('.collapse').collapse("hide");
        } else {
            $('.collapse').collapse("show");
            $("[data-toggle='collapse']").removeAttr("data-toggle");
        }
    }
});