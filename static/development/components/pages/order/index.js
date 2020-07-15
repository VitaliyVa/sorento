import './index.scss';


$('.addit_btn').on('click', function() {
    $(this).toggleClass('addit_btn_anActive');
});


$('.add_btn').on('click', function() {
    let wrap = $(this).parents('.order_card');

    if ($(this).hasClass('add_btn_anActive')) {
        $(this).removeClass('add_btn_anActive');
        $(wrap).find('.hidden_addit__block').removeClass('hidden_addit__block_active');
    } else {
        $(this).addClass('add_btn_anActive');
        $(wrap).find('.hidden_addit__block').addClass('hidden_addit__block_active');
      

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
$('.basket_prep_order').on('click', function() {
    console.log(123);
    var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
    if (current_quan_sum == 1) {
      console.log('меньше не може бути');
    } else {
      $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) - 1);
      let item_id = $(this).attr('data-quantity_item_id');
      let quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
      console.log('quantity_id: ', quantity_id);
     
      fetch(`/api/cart_item/${Number(item_id)}/`, {
        method: 'PATCH',
        body: JSON.stringify({
          quantity: Number(quantity_id),
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log('data: ', data);
          $(this).parents('.basket_content_profile').find('.basket_summ').text(`${Math.round(data.cart_item_total_price)} ${data.cart_currency}`)
          $('.order_sum').text(`${data.cart_currency} ${Math.round(data.cart_total_price)}`);
        });
    } 
})
$('.usually_input_order').on('blur', function() {
    let curr_user_num = $(this);
    if (curr_user_num.val() > 0) {
      
    } else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
        $(curr_user_num).val(1);
    }
});

$('.basket_input_order').on('blur', function() {
    let curr_user_num = $(this);
    let quantity_id;
    if (curr_user_num.val() > 0) {
      
    } else if (curr_user_num.val() <= 0 || curr_user_num.val() == '') {
        $(curr_user_num).val(1);
    }
      let item_id = $(this).attr('data-quantity_item_id');
      quantity_id = $(this).val();
      console.log('quantity_id: ', quantity_id);
      
      fetch(`/api/cart_item/${Number(item_id)}/`, {
        method: 'PATCH',
        body: JSON.stringify({
          quantity: Number(quantity_id),
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log('data: ', data);
          $(this).parents('.basket_content_profile').find('.basket_summ').text(`${Math.round(data.cart_item_total_price)} ${data.cart_currency}`)
          $('.order_sum').text(`${data.cart_currency} ${Math.round(data.cart_total_price)}`);
        });
})
$('.usually_next_order').on('click', function() {
    var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
    console.log('current_quan_sum: ', current_quan_sum);
  
    if (current_quan_sum == 99999) {
      console.log('більше не може бути');
    } else {
      $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);
    }  
});

$('.basket_next_order').on('click', function() {
    var current_quan_sum = $(this).parents('.basket_counter').find('.cart_counter').val();
  console.log('current_quan_sum: ', current_quan_sum);

  if (current_quan_sum == 99999) {
    console.log('більше не може бути');
  } else {
    $(this).parents('.basket_counter').find('.cart_counter').val(Number(current_quan_sum) + 1);

    let item_id = $(this).attr('data-quantity_item_id');
    let quantity_id = $(this).parents('.basket_counter').find('.quan_cart_sum').val();
    console.log('quantity_id: ', quantity_id);

    fetch(`/api/cart_item/${Number(item_id)}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: Number(quantity_id),
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log('data: ', data);
        $(this).parents('.basket_content_profile').find('.basket_summ').text(`${Math.round(data.cart_item_total_price)} ${data.cart_currency}`)
        $('.order_sum').text(`${data.cart_currency} ${Math.round(data.cart_total_price)}`);
      });
  } 
})




$('.basket_del').on('click', basket_delete);
function basket_delete() {
  let wrap = $(this).parents('.order_card');
  $(wrap).css("max-height", '0px');
  $(wrap).css("transform", 'scale(0)');
    setTimeout(() => {
        $(wrap).css("position", 'absolute');
    }, 200);   
  setTimeout(() => {
      $(wrap).remove();
  }, 1000);
  
  let item_id = $(this).attr('data-quantity_item_id');

//   fetch(`/api/cart_item/${item_id}`, {
//     method: 'DELETE',
//   })
//     .then(data => {
//       return data.json();
//     })
//     .then(data => {
//       console.log('data: ', data);
//       $(this).parents('.order_card').find('.main_char_result').text(`${Math.round(data.cart_item_total_price)} ${data.cart_currency}`)
//     //   $('.basket_all_result').text(`${data.cart_currency} ${Math.round(data.cart_total_price)}`);
//     });

}


$('.radio_block').on('click', function() {
    let wrap = $(this).parents('.radio__wrap');
    $(wrap).find('.radio_center').removeClass('radio_center_active');
    $(this).find('.radio_center').addClass('radio_center_active');
});

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




    $('.select_aria').select2({
        dropdownAutoWidth: true,
        width: 'resolve',
    });
    $('.select_city').select2({
        dropdownAutoWidth: true,
        width: 'resolve',
        // matcher: matchCustom
   });
   for (let i = 0; i < 5; i++) {
        let option_area = document.createElement('option');
        option_area.setAttribute('data-attr', i);
        option_area.textContent = 'ternopol' + ' (' + i + ')';
        $('.select_city')[0].appendChild(option_area);
   }
 

    // $('.select_city').on('select2:select', function (e) { 
    //     let item = $('.select_city').find(':selected');
    //     console.log('item: ', $(item).attr('data-attr'));

    //     let adress_check = document.querySelectorAll('.select_aria option');
    //     adress_check.forEach(function (item, index, array) {
    //         $(item).remove();
    //     });
    //     fetch(`/api/warehouses/?query=${$(item).attr('data-attr')}`, {
    //         method: 'GET',
    //       })
    //         .then(data => {
    //           return data.json();
    //         })
    //         .then(body => {
    //           // console.log('body: ', body);
                
    //           if (body.count != 0) {
  
    //             for (let key in body.results) {
  
  
    //               let option_area = document.createElement('option');
    //               option_area.textContent = body.results[key].title;
    //               $('.select_aria')[0].appendChild(option_area);
  
    //             }
  
    //           }
    //         })
    // });