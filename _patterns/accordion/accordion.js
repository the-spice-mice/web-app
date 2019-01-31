$('.accordion-label').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('open');
});
