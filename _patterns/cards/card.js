// Favourite

// $('.favourite-icon').on('click', function () {
//   $(this).parent().toggleClass('active');
// });

$('.favourite').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('favourited');
});
