// Favourite

// $('.favourite-icon').on('click', function () {
//   $(this).parent().toggleClass('active');
// });

$('.favourite').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('favourited');
});

$('.favourite-sitters .favourited').on('click', function () {
  $(this).parent().parent().fadeOut();
});

$('.card').focus(function() {
  $(this).addClass('focused');
});

$('.card').focusout(function() {
  $(this).removeClass('focused');
});

$('.card .favourite').focus(function() {
  $(this).parent().addClass('focused');
});

$('.card .favourite').focusout(function() {
  $(this).parent().removeClass('focused');
});


$('.card a.unit').focus(function() {
  $(this).parent().parent().addClass('focused');
});
