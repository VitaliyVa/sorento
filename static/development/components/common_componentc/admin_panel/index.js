import './index.scss'

console.log(1313);
  // admin panel ============================>
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
      hidden_link.setAttribute(`href`, link_adress);
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
        hidden_link.setAttribute(`href`, link_adress);
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
  }


  // admin panel ============================>
