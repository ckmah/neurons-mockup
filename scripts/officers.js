function animOfficers() {
  $officer = $('.officer');

  $officer.mouseenter(function() {
    $this = $(this);
    // $this.css('z-index', 10);
    $this.children('.mugshot').addClass('officerup');
    $this.children('.officer_label').addClass('officerdown');
  });

  $officer.mouseleave(function() {
    $this = $(this);
    // $this.removeAttr('style');
    $this.children('.mugshot').removeClass('officerup');
    $this.children('.officer_label').removeClass('officerdown');
  });

  $officer.click(function() {
    animBio($(this));
  });

  $officer.children().click(function() {
    animBio($(this).parent());
  });

  $('#bio_back').click(function() {
    animBioBack();
  });
}

function animBio($this) {
  // show cover
  fadeInSimple($('#cover'));
  $('#cover').css({
    'display': 'block'
  });
  fadeOut($('#officer_grid'));

  setTimeout(function() {
    fadeInSimple($('#officer_bio'));
    $('#officer_bio').css('display', 'flex');
    $('#bio_container' + $this.attr('data-index')).addClass('activebc');
  }, 300);

}

function animBioBack() {
  // hide officer bio
  fadeOutSimple($('#officer_bio'));

  // hide cover
  setTimeout(function() {
    fadeOutSimple($('#cover'));
  }, 300);

  // reset active to none
  $('.bio_container').removeClass('activebc');
  fadeIn($('#officer_grid'));

}

function initOfficers() {
  var $officers = $('.officer');
  var $bios = $('.bio_container');
  for (var i = 0; i < $officers.length; i = i + 1) {
    $officers[i].setAttribute('data-index', i + 1);
    $bios[i].setAttribute('id', 'bio_container' + (i + 1));
  }
  $('#officer_bio').css('display', 'none');
}

$(document).ready(function() {
  initOfficers();
  animOfficers();
});
