$(document).ready(function(){
  const toggle = $('.header__list')
  $('.adapt-header__burger').click(function(){
      toggle.toggleClass('header__list--show');
    });
  });
