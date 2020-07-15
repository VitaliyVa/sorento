import './index.scss';

$(".nav_menu").on('click',function(){
    if ($(this).hasClass('nav_menu_active')) {
        $(this).removeClass("nav_menu_active");
        $('.nav_content').removeClass('nav_content_active');
        $('.nav_bar').removeClass('nav_bar_active');
        $('.animate_block').removeClass('animate_block_active');
        $('.animate_block').css('bottom', '-40px');
            $("html,body").css("overflow", "visible");

    } else {
        $(this).addClass("nav_menu_active");
        $('.nav_content').addClass('nav_content_active');
        $('.nav_bar').addClass('nav_bar_active');
            $("html,body").css("overflow", "hidden");

        create_anim($('.abs_nav_1'), '80px', 200);
        create_anim($('.abs_nav_2'), '30px', 300);
        create_anim($('.abs_nav_3'), 'unset', 400);

        create_anim($('.nav_title__block'), '0px', 500);
        create_anim($('.nav_soc__block'), '0px', 600);
        create_anim($('.nav_adress__block'), '50px', 700);




    }


});



function create_anim(block, bottom, time) {
    setTimeout(() => {
        let item = block;
        $(item).addClass('animate_block_active');
        $(item).css('bottom', bottom);
    }, time);
}