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

// $('.sign-in a').on('click', function (e) {
//   $('.sign-in-fade-in').fadeIn();
// });
//
// $('.sign-in-fade-in, .card-sign-in .close-card').on('click', function(e) {
//   // e.preventDefault();
//   e.stopImmediatePropagation();
//   $('.sign-in-fade-in').fadeOut();
// });

$('.sign-in a, .force-login').on('click', function (e) {
  e.preventDefault();
  $('.sign-in-fade-in').css('display', 'block');
  $(".sign-in-fade-in").animate({opacity: "1"}, 250);
});

$('.sign-in-fade-in, .card-sign-in .close-card').on('click', function(e) {
  // e.preventDefault();
  e.stopImmediatePropagation();
  $(".sign-in-fade-in").animate({opacity: "0"}, 250);
  setTimeout(function() { $('.sign-in-fade-in').css('display', 'none'); }, 250);
});

$('.card-sign-in').on('click', function(e) {
  e.stopImmediatePropagation();
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.sign-in-wrap').removeClass('full-height')
      }
      if ($(this).scrollTop() < 50) {
        $('.sign-in-wrap').addClass('full-height')
      }
   });
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
  $('.title-alert').fadeOut();
});
