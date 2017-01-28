'use strict';
(function ($) {
    var $search = $('#search');

    // sidenav
    $(".button-collapse").sideNav();

    // search filter
    $search.keyup(function () {
        var value = $search.val();

        if (value && value !== '') {
            $('.collapsible-accordian li').addClass('hide');
            $('.collapsible-accordian li[data-value*="' + value + '"]').removeClass('hide');
        } else {
            $('.collapsible-accordian li').removeClass('hide');
        }
    });

})(jQuery);