$('.photo-array a').on('click', function () {
  var imgSource = $(this).children().attr('src');

  $('#photo-array-focused').fadeIn();
  $('.photo-array-image').attr('src', imgSource);
});

$('.photo-array-focused').on('click', function (e) {
  e.preventDefault();
  $('#photo-array-focused').fadeOut();
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    $('#photo-array-focused').fadeOut();
  }
});

var photoArray1 = $('[href="#photo-array-1"] img').attr('src');
var photoArray2 = $('[href="#photo-array-2"] img').attr('src');
var photoArray3 = $('[href="#photo-array-3"] img').attr('src');
var photoArray4 = $('[href="#photo-array-4"] img').attr('src');
var photoArray5 = $('[href="#photo-array-5"] img').attr('src');
var photoArray6 = $('[href="#photo-array-6"] img').attr('src');

$('.photo-array-focused-next').on('click', function (e) {
  console.log('clicked');
  e.stopImmediatePropagation();
  e.preventDefault();
  switch ($('.photo-array-image').attr('src')) {
    case photoArray1:
      $('.photo-array-image').attr('src', photoArray2);
      break;
    case photoArray2:
      $('.photo-array-image').attr('src', photoArray3);
      break;
    case photoArray3:
      $('.photo-array-image').attr('src', photoArray4);
      break;
    case photoArray4:
      $('.photo-array-image').attr('src', photoArray5);
      break;
    case photoArray5:
      $('.photo-array-image').attr('src', photoArray6);
      break;
    case photoArray6:
      $('.photo-array-image').attr('src', photoArray1);
      break;
  }
});

$('.photo-array-focused-previous').on('click', function (e) {
  console.log('clicked');
  e.stopImmediatePropagation();
  e.preventDefault();
  switch ($('.photo-array-image').attr('src')) {
    case photoArray1:
      $('.photo-array-image').attr('src', photoArray6);
      break;
    case photoArray2:
      $('.photo-array-image').attr('src', photoArray1);
      break;
    case photoArray3:
      $('.photo-array-image').attr('src', photoArray2);
      break;
    case photoArray4:
      $('.photo-array-image').attr('src', photoArray3);
      break;
    case photoArray5:
      $('.photo-array-image').attr('src', photoArray4);
      break;
    case photoArray6:
      $('.photo-array-image').attr('src', photoArray5);
      break;
  }
});
