$('.filter-form-button.force-login').on('click', function() {
  $('a.unit[href="/owner/"]').attr('href', '/owner/search-results/');
});

$('.force-login[href="/my-bookings"]').on('click', function() {
  $('a.unit[href="/owner/"]').attr('href', '/owner/my-bookings/');
});
