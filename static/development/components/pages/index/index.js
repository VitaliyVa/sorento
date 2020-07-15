import './index.scss';







$('.info_btn').on('click', function() {
    $(this).toggleClass('info_btn_active');
  });
  

$.fn.visible = function(partial) {

    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

function parallaxEffect(target, data_smooth) {
    var element = $(target);

    element.each(function (i, el) {

        var move = $(el);

        $(window).scroll(function (event) {
           var top =  move.offset().top - $(this).scrollTop();
            if (move.visible(true)) {
                move.addClass("moving-target").css({
                    "transform": "translateY(" + top / data_smooth + "px)",
                    "-webkit-transform": "translateY(" + top / data_smooth + "px)",
                    "-moz-transform": "translateY(" + top / data_smooth + "px)"
                });
            } else {
                move.removeClass("moving-target");
            }
        });
    });
}



	parallaxEffect('.header_abs_1', 5);
	parallaxEffect('.header_abs_2', 6);
	parallaxEffect('.header_abs_3', 7);
	parallaxEffect('.header_abs_4', 8);
	parallaxEffect('.header_abs_5', 9);


    $('.tab_link').on('click', function() {
        $('.tab_link').removeClass('tab_link_active');
        $(this).addClass('tab_link_active');

        let current_tab = $(this).attr('data-tab');
        $('.tab_content_item').removeClass('tab_content_item_active');
        $(`#tab_${current_tab}`).addClass('tab_content_item_active');

    });

$('.char_res').on('click', function() {
    let wrapp = $(this).parents('.char_radiobtn');
    if ($(this).hasClass('char_second_res')) {
        $(wrapp).find('.active_bg').removeClass('active_bg_first');
        $(wrapp).find('.active_bg').addClass('active_bg_second');

        $(wrapp).addClass('char_radiobtn_next');
        $(wrapp).removeClass('char_radiobtn_prev');
    } else {
        $(wrapp).find('.active_bg').addClass('active_bg_first');
        $(wrapp).find('.active_bg').removeClass('active_bg_second');

        $(wrapp).removeClass('char_radiobtn_next');
        $(wrapp).addClass('char_radiobtn_prev');

    }
})



$('.btn_additional').on('click', function() {
    let wrap = $(this).parents('.characteriscick_prof');
    $(wrap).find('.bottom_info').toggleClass('bottom_info_active');
});

