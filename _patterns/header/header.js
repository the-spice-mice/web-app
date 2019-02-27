// Sticky Nav

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.masthead').addClass('sticky')
      }
      if ($(this).scrollTop() < 50) {
        $('.masthead').removeClass('sticky')
      }
   });
});

// Menu Close

$('main').on('click', function () {
  $('.masthead').removeClass('nav-open');
  $('.notifications').removeClass('notifications-open');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('.masthead').removeClass('nav-open');
    $('.notifications').removeClass('notifications-open');
  }
});

// Toggle Nav

$('.tog-nav').on('click', function (e) {
  e.preventDefault();
  $('.masthead').toggleClass('nav-open');
  $('.notifications').removeClass('notifications-open');
});

// Sign In

// $('.sign-in a').on('click', function (e) {
//   e.preventDefault();
//   $('body').addClass('signed-in');
// });

$('.sign-in a').on('click', function (e) {
  $('.sign-in-fade-in').fadeIn();
});

$('.sign-in-fade-in, .card-sign-in .close-card').on('click', function(e) {
  // e.preventDefault();
  e.stopImmediatePropagation();
  $('.sign-in-fade-in').fadeOut();
});

$('.card-sign-in').on('click', function(e) {
  e.stopImmediatePropagation();
});


// Notifications

$('.masthead .profile-icon-wrap > a').on('click', function (e) {
  e.preventDefault();
  $('.notifications').toggleClass('notifications-open');
  $('.masthead').removeClass('nav-open');
});

$('.unread').on('click', function () {
  $(this).removeClass('unread');
});

$('.notifications-list a').hover(function () {
  $(this).removeClass('unseen');
});
