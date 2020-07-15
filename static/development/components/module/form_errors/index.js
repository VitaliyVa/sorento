import './index.scss'







let lang_site;
let curr_lang;
lang_site = location_leng();
switch (lang_site) {
    case 'uk':
    curr_lang = "Ім'я повинно містити лише букви";
    break;
    case 'ru':
    curr_lang = 'Имя должно содержать только буквы';
    break;
    case 'en':
    curr_lang = 'The name must contain only letters';
    break;
    default:
    curr_lang = "Ім'я повинно містити лише букви.";
}

jQuery.validator.addMethod("lettersonly", function(value, element) {
return this.optional(element) || /[^0-9]+$/i.test(value);
}, curr_lang); 





$(function() {
  Onload();
})
// /**
//  * valide_form - Валідація форм
//  * @param {selector form} ID Форми на яку підвішують валідацію
//  * @param {class name} class групи куди виводять помилки
//  * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
//  *
//  **/
function Onload() {

  // var more_form = $('.mini-user-form');

  // for (var testz = 0; testz < more_form.length; testz++) {
  //     var tehas = more_form[testz];
  //     var dinamic_id = 'active_form' + testz;
  //     $(tehas).attr('id', dinamic_id);
  //     var dinamic_main_id = '#' + $(tehas).attr('id');
  //     console.log(dinamic_main_id);
  //     valide_form(dinamic_main_id, '.inp-mini-wrap', false);
  // }

  valide_form('.order_info_data__block', '.inp-vak-wrap', true);
  valide_form('.contacts_left', '.inp-vak-wrap', true);
  
}

function location_leng() {
  return location.pathname.split('/')[1];
}
function valide_form(id_form, error_inp_wrap, check_request) {
  var modal = false;
  var check_request = check_request;
  if ($(id_form).length > 0) {
      var lang_site;
      var error_text = {};

      lang_site = location_leng();
      switch (lang_site) {
          case 'uk':
          error_text.required = 'Поле обов\'язково для заповнення';
          error_text.email = 'Поле має містити email';
          break;
          case 'ru':
          error_text.required = 'Поле обязательно для заполнения';
          error_text.email = 'Поле должно содержать email';
          break;
          case 'en':
          error_text.required = 'The field is required';
          error_text.email = 'The field must contain an email';
          break;
          default:
          error_text.required = 'Поле обов\'язково для заповнення.';
          error_text.email = 'Поле має містити email.';
      }
      $(id_form).validate({
          errorPlacement: function (event, validator) {
              console.log(validator);
              $(validator).parents(error_inp_wrap).append($(event));
          },
          rules: {
             
              
              name: {
                  required: true,
                  lettersonly: true
              },
              phone: {
                  required: true,
              },
              email: {
                required: true,
                email: true
              },
             
           },
           messages: {
             
              name: {
                  required: error_text.required,
              },
              phone: {
                  required: error_text.required,
              },
              email: {
                required: error_text.required,
                email: error_text.email
            },
             
           },
           submitHandler: function(form) {
             console.log('form: ', form);
              event.preventDefault();
               $('.load_spin').addClass('load_spin_active');
               var form_input = $(form).serializeArray();
               var url_form = form.action;
               var form_json = {};
               $(form_input).each(function(index, obj) {
                  form_json[obj.name] = obj.value;
                  
                });
               
                if(url_form != ''){
                 
                 
                  fetch(url_form, {
                    method: 'POST',
                    body: new URLSearchParams($.param(form_json)),
                    // headers: {
                    //   "Content-Type": "application/json",
                    //   "Accept": "application/json"
                    // },
                  })
                  .then(data => {
                    return data.json();
                  })
                  .then(data => {
                    console.log('data: ', data);
                    console.log('tut?');
                    if(data.status=='OK' && typeof data['status'] !== "undefined"){
                      
                        sayHi();
                    }
                    if(data.status=='BAD' && typeof data['status'] !== "undefined"){
                        $('.load_spin').removeClass('load_spin_active');
                        $(".error_block_false").text("Невірний логін або пароль");

                        $('.login_checked_error').text(data.error_fields.username);
                        $('.login_checked_error').text(data.error_fields.email);
                        console.log('$(): ', $('.login_checked_error'));
                        // if (typeof data['error_field'] == "undefined") {
                          
                        //   console.log('tuta');
                        // }
                     
                    }
        
                    if(typeof data['url'] !== "undefined" && data.url!=''){
                      //   sayHi();
                        location.href=data.url;
                    }
                  
        
        
                  })
        
                }else {
                  console.log("forn_not_actions");
                }
        
           
              function explode(){
                if (id_form == '#modal-form_user') {
                  // window.location.pathname = '/'
                } else {
                  // sayHi();
                }
                 
                }
                explode()
              function sayHi() {
                console.log(133313);
                console.log('modal: ', modal);
                
                  $('.load_spin').removeClass('load_spin_active');
                  

                  if (modal == true) {
                    console.log('tut');
                    $.fancybox.open({
                      src: '#modal_form_change_profile',
                    });
                    setTimeout(() => {
                      $.fancybox.close({
                        src: '#modal_form_change_profile',
                      });
                    }, 1500);
                  } else {
                    $.fancybox.close();
                  }
                  if (check_request === true) {
                   


                    $.fancybox.open({
                      src: '#modal-form_true',
                    });
                    setTimeout(() => {
                      $.fancybox.close({
                        src: '#modal-form_true',
                      });
                    }, 1500);
                      var form_inputs = $(form)[0].querySelectorAll('input');
                      if (form_inputs.length > 0) {
                          for (var key in form_inputs) {
                              if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                                  if (form_inputs[key].type !== 'submit') {
                                      form_inputs[key].value = '';
                                  }
                              }
                          }
                          var form_textaria = $(form)[0].querySelectorAll('textarea');
                          if (form_textaria.length > 0) {
                              form_textaria[0].value = '';
                          }
                      }
                  }
              }
             
           }
      });
  } 
}

