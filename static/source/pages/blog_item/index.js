/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blog_item.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/admin_panel/index.js":
/*!************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/admin_panel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

console.log(1313); // admin panel ============================>
// сторінка повина починатись по стандарту з admin_check = 1

var only_on_click = true;
var admin_panels = document.querySelectorAll('.db_content');
var admin_check = sessionStorage.getItem('admin_panell');
console.log('admin_check: ', admin_check);

if (admin_check == 0) {
  only_on_click = false;
  $('.admin_button').attr('data-title', 'Виключити редагування');
  $('.admin_checkbox').attr('checked', '');
  admin_check = sessionStorage.getItem('admin_panell');
  admin_panels.forEach(function (item, index, array) {
    var link_adress = $(item).data('admin_url');
    var hidden_panel = document.createElement('div');
    hidden_panel.classList.add('db_hidden_content');
    var hidden_link = document.createElement('a');
    hidden_link.classList.add('db_hidden_link');
    hidden_link.setAttribute("href", link_adress);
    hidden_link.textContent = 'Редагувати';
    hidden_panel.appendChild(hidden_link);
    item.appendChild(hidden_panel);
  });
}

$('.svg_power').on('click', function () {
  admin_func();
});

function admin_func() {
  if (only_on_click) {
    only_on_click = false;
    $('.admin_button').attr('data-title', 'Виключити редагування');
    sessionStorage.setItem('admin_panell', 0);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      var link_adress = $(item).data('admin_url');
      var hidden_panel = document.createElement('div');
      hidden_panel.classList.add('db_hidden_content');
      var hidden_link = document.createElement('a');
      hidden_link.classList.add('db_hidden_link');
      hidden_link.setAttribute("href", link_adress);
      hidden_link.textContent = 'Редагувати';
      hidden_panel.appendChild(hidden_link);
      item.appendChild(hidden_panel);
    });
  } else {
    $('.admin_button').attr('data-title', 'Включити редагування');
    only_on_click = true;
    sessionStorage.setItem('admin_panell', 1);
    admin_check = sessionStorage.getItem('admin_panell');
    admin_panels.forEach(function (item, index, array) {
      $('.db_hidden_content').remove();
    });
  }
} // admin panel ============================>

/***/ }),

/***/ "../components/common_componentc/admin_panel/index.scss":
/*!**************************************************************!*\
  !*** ../components/common_componentc/admin_panel/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$(".nav_menu").on('click', function () {
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
  setTimeout(function () {
    var item = block;
    $(item).addClass('animate_block_active');
    $(item).css('bottom', bottom);
  }, time);
}

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var lang_site;
var curr_lang;
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

jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /[^0-9]+$/i.test(value);
}, curr_lang);
$(function () {
  Onload();
}); // /**
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
      errorPlacement: function errorPlacement(event, validator) {
        console.log(validator);
        $(validator).parents(error_inp_wrap).append($(event));
      },
      rules: {
        name: {
          required: true,
          lettersonly: true
        },
        phone: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: error_text.required
        },
        phone: {
          required: error_text.required
        },
        email: {
          required: error_text.required,
          email: error_text.email
        }
      },
      submitHandler: function submitHandler(form) {
        console.log('form: ', form);
        event.preventDefault();
        $('.load_spin').addClass('load_spin_active');
        var form_input = $(form).serializeArray();
        var url_form = form.action;
        var form_json = {};
        $(form_input).each(function (index, obj) {
          form_json[obj.name] = obj.value;
        });

        if (url_form != '') {
          fetch(url_form, {
            method: 'POST',
            body: new URLSearchParams($.param(form_json)) // headers: {
            //   "Content-Type": "application/json",
            //   "Accept": "application/json"
            // },

          }).then(function (data) {
            return data.json();
          }).then(function (data) {
            console.log('data: ', data);
            console.log('tut?');

            if (data.status == 'OK' && typeof data['status'] !== "undefined") {
              sayHi();
            }

            if (data.status == 'BAD' && typeof data['status'] !== "undefined") {
              $('.load_spin').removeClass('load_spin_active');
              $(".error_block_false").text("Невірний логін або пароль");
              $('.login_checked_error').text(data.error_fields.username);
              $('.login_checked_error').text(data.error_fields.email);
              console.log('$(): ', $('.login_checked_error')); // if (typeof data['error_field'] == "undefined") {
              //   console.log('tuta');
              // }
            }

            if (typeof data['url'] !== "undefined" && data.url != '') {
              //   sayHi();
              location.href = data.url;
            }
          });
        } else {
          console.log("forn_not_actions");
        }

        function explode() {
          if (id_form == '#modal-form_user') {// window.location.pathname = '/'
          } else {// sayHi();
            }
        }

        explode();

        function sayHi() {
          console.log(133313);
          console.log('modal: ', modal);
          $('.load_spin').removeClass('load_spin_active');

          if (modal == true) {
            console.log('tut');
            $.fancybox.open({
              src: '#modal_form_change_profile'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal_form_change_profile'
              });
            }, 1500);
          } else {
            $.fancybox.close();
          }

          if (check_request === true) {
            $.fancybox.open({
              src: '#modal-form_true'
            });
            setTimeout(function () {
              $.fancybox.close({
                src: '#modal-form_true'
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

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/blog_item/index.js":
/*!**********************************************!*\
  !*** ../components/pages/blog_item/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/blog_item/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/pages/blog_item/index.scss":
/*!************************************************!*\
  !*** ../components/pages/blog_item/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./blog_item.js":
/*!**********************!*\
  !*** ./blog_item.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_admin_panel_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common_componentc/admin_panel/index */ "../components/common_componentc/admin_panel/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_blog_item_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pages/blog_item/index */ "../components/pages/blog_item/index.js");
// script interface


 // script common elements


 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map