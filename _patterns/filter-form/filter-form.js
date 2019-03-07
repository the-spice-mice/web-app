$('.filter-form-button.force-login').on('click', function() {
  $('.owner-sign-in-button').attr('href', '/owner/search-results/');
});

$('.force-login[href="/my-bookings"]').on('click', function() {
  $('.owner-sign-in-button').attr('href', '/owner/my-bookings/');
});
