function animContact() {
  $('#contact_main > .contact_methods').mouseenter(function() {
    fadeOutSimple($(this).children('img'));
    fadeInSimple($(this).children('.contact_info'));
    $(this).children('.contact_info').css('display', 'block');
  });

  $('#contact_main > .contact_methods').mouseleave(function() {
    fadeOutSimple($(this).children('.contact_info'));
    fadeInSimple($(this).children('img'));
  });
}

function animContactBack() {

}

function initContact() {
  $('.contact_info').css('display', 'none');
}

$(document).ready(function() {
  initContact();
  animContact();
  animContactBack();
});
