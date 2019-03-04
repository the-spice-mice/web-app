$('.section-tab-btn').on('click', function (e) {
  var id = $(this).attr('href');
  var page = $(this).attr('data-page');

  e.preventDefault();
  $('.section-tab-btns li').removeClass('section-tab-selected');
  $(this).parent().addClass('section-tab-selected');
  $('.section-tab-btns').removeClass('tab-page-1');
  $('.section-tab-btns').removeClass('tab-page-2');
  $('.section-tab-btns').removeClass('tab-page-3');
  $('.section-tab-btns').addClass(page);
  $('.section-tab-page').removeClass('section-tab-page-active');
  $(id).addClass('section-tab-page-active');
});
