// On load

if ($(this).scrollTop() < 50) {
  $('.masthead').removeClass('sticky')
}

// Booking request

$('.btn.booking-request').on('click', function(e) {
  e.preventDefault();
  $('.request-fade-in').css('display', 'block');
  $(".request-fade-in").animate({opacity: "1"}, 250);
});

$('.request-fade-in, .card-booking-request .close-card').on('click', function(e) {
  // e.preventDefault();
  e.stopImmediatePropagation();
  $(".request-fade-in").animate({opacity: "0"}, 250);
  setTimeout(function() { $('.request-fade-in').css('display', 'none'); }, 250);
});

$('.card-booking-request').on('click', function(e) {
  e.stopImmediatePropagation();
});
