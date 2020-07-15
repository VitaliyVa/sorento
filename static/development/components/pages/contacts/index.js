import './index.scss';


var inputHasFocus = $('.input_focus');

inputHasFocus.on('focus', function () {
    let focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
    focusFinder.addClass('label__style_active');
});

inputHasFocus.on('blur', function () {
    if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
        let blurFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
        blurFinder.removeClass('label__style_active');
    }

});
