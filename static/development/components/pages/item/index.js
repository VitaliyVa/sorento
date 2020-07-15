import './index.scss';


$('.info_btn').on('click', function() {
  $(this).toggleClass('info_btn_active');
});





$('.hidden_addit_title').on('click', function() {

  if ($(this).hasClass('hidden_addit_title_anActive')) {
      $(this).removeClass('hidden_addit_title_anActive');
      $('.hidden_addit__block').removeClass('hidden_addit__block_active');
        $('.addit_item__block').removeClass('addit_item__block_active');

  } else {
      $(this).addClass('hidden_addit_title_anActive');
      $('.hidden_addit__block').addClass('hidden_addit__block_active');
        $('.addit_item__block').addClass('addit_item__block_active');

  }
})













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




$('.usually_prep_order').on('click', function() {
  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  if (current_quan_sum == 1) {
    console.log('меньше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) - 1);
  }
});
$('.usually_input_order').on('blur', function() {
  let curr_user_num = $(this);
  if (curr_user_num.val() > 0) {
    
  } else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
      $(curr_user_num).val(1);
  }
});
$('.usually_next_order').on('click', function() {
  var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  console.log('current_quan_sum: ', current_quan_sum);

  if (current_quan_sum == 99999) {
    console.log('більше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);
  }  
});



