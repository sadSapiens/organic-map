$(document).ready(function() {
    var clicks = true;
    $('#filter').click(() => {
        if (clicks) {
            $('div.cover__filter').find('.cover__filter-menu')
                .addClass('cover__filter-menu_active');
            clicks = false;
        } else {
            $('div.cover__filter').find('.cover__filter-menu_active')
                .removeClass('cover__filter-menu_active');
            clicks = true;
        }
    });


});