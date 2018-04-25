$(document).ready(function(){
  const toggle = $('.header__list')
  $('.adapt-header__burger').click(function(){
      toggle.slideToggle('header__list--show');
    });
  });
