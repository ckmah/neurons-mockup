/************************ NAVBAR & SECTION TRANSITIONS ************************/

  var $activeSection;

/**
 * Provides transitions for switching sections.
 */
function changeSection() {
  $('nav ul li').mousedown(function() {

    var $sections = $('section');
    var $target = $(this).id.substring(2);



    // if ($target.   activeSection.position().left)

    // // hide current section
    // $sections.css({
    //   "webkitTransform": "scale(0.8)",
    //   "MozTransform": "scale(0.8)",
    //   "msTransform": "scale(0.8)",
    //   "OTransform": "scale(0.8)",
    //   "transform": "scale(0.8)",
    //   "opacity": 0
    // });

    // window.setTimeout(function() {
    //   $sections.css('display', 'none')
    //   $('#' + $target).css('display', 'block');
    // }, 100);

    // // show selected section
    // window.setTimeout(function() {
    //   $('#' + $target).css({
    //     "webkitTransform": "scale(1)",
    //     "MozTransform": "scale(1)",
    //     "msTransform": "scale(1)",
    //     "OTransform": "scale(1)",
    //     "transform": "scale(1)",
    //     "opacity": 1
    //     // "display": "block"
    //   });
    // }, 125);
  });
}

/**
 * Highlight selection of respective list element on hover.
 */
function navliHover() {
  // mouse enters element
  $('nav ul li').hover(function() {
    // use as reference
    var $slide = $('#navslide');

    // reference li hovered on
    var $item = $(this);

    //retrieve left position and width
    var left = $item.position().left;
    var width = $item.outerWidth();

    // set left position and width
    $slide.css('left', left);
    $slide.width(width);

  }, function() { // mouse leaves element
    // move back to initial position
    // slide.style.left = $('nav ul li:first-child').position().left;
    // slide.style.width = $('nav ul li:first-child').outerWidth();
  });
}

/**
 * Initialize navbar highlighter in appropriate position
 */
function initNav() {
  // navbar sliding bar highlight
  var slide = document.createElement('div');
  slide.id = 'navslide';

  // retrieve current section navbar entry
  var initLeft = $('nav ul li:first-child').position().left;
  var initWidth = $('nav ul li:first-child').outerWidth();

  // initialize slide position and width to first child
  slide.style.left = initLeft;
  slide.style.width = initWidth;

  // append to nav
  $('nav').append(slide);
}

/**
 * Set home to initial displayed section.
 */
function initSections() {
  $('section').css('display', 'none'); // hide all
  $('#home').css('display', 'block'); // display home
  $activeSection = $('#home');
}

$(document).ready(function() {
  initNav(); // create navbar with initial positions

  changeSection(); // change section on click
  navliHover(); // slide on hover

  initSections(); // set to home section
});
