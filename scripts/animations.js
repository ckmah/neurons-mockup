/************************ NAVBAR & SECTION TRANSITIONS ************************/

var $activeSection; // save reference to active section
var TRANSTIME = 250;
var BUFFERTIME = 10;
/**
 * Fade and zoom in on selected element.
 * @param  {tag} $element Element to perform fadeIn on.
 */
function fadeIn($element) {
  // reset
  $element.css({
    "webkitTransform": "scale(0.8)",
    "MozTransform": "scale(0.8)",
    "msTransform": "scale(0.8)",
    "OTransform": "scale(0.8)",
    "transform": "scale(0.8)",
    "opacity": 0,
    "display": "flex"
  });

  // zoom and fade in after delay
  setTimeout(function() {
    $element.css({
      "webkitTransform": "scale(1)",
      "MozTransform": "scale(1)",
      "msTransform": "scale(1)",
      "OTransform": "scale(1)",
      "transform": "scale(1)",
      "opacity": 1
    });
  }, TRANSTIME);
}

/**
 * Fade and zoom out on selected element
 * @param  {tag} $element Element to perform fadeOut on.
 */
function fadeOut($element) {
  // reset
  $element.css({
    "webkitTransform": "scale(1)",
    "MozTransform": "scale(1)",
    "msTransform": "scale(1)",
    "OTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": 1,
    "display": "flex"
  });

  // zoom out, fade out
  $element.css({
    "webkitTransform": "scale(0.8)",
    "MozTransform": "scale(0.8)",
    "msTransform": "scale(0.8)",
    "OTransform": "scale(0.8)",
    "transform": "scale(0.8)",
    "opacity": 0
  });

  // hide after transition
  setTimeout(function() {
    $element.css('display', 'none')
  }, TRANSTIME);
}

/**
 * Fade and slide in from left side selected element.
 * @param  {tag} $element Element to perform fadeIn on.
 */
function slideOut($element) {
  // reset
  $element.css({
    "webkitTransform": "translate(0px,0px)",
    "MozTransform": "translate(0px,0px)",
    "msTransform": "translate(0px,0px)",
    "OTransform": "translate(0px,0px)",
    "transform": "translate(0px,0px)",
    "opacity": 1,
    "display": "flex"
  });

  // slide left, fade
  $element.css({
    "webkitTransform": "translate(-400px,0px)",
    "MozTransform": "translate(-400px,0px)",
    "msTransform": "translate(-400px,0px)",
    "OTransform": "translate(-400px,0px)",
    "transform": "translate(-400px,0px)",
    "opacity": 0
  });

  // hide after transition
  setTimeout(function() {
    $element.css('display', 'none')
  }, TRANSTIME);
}

/**
 * Fade and slide out to left side selected element.
 * @param  {tag} $element Element to perform fadeIn on.
 */
function slideIn($element) {
  // reset
  $element.css({
    "webkitTransform": "translate(-400px,0px)",
    "MozTransform": "translate(-400px,0px)",
    "msTransform": "translate(-400px,0px)",
    "OTransform": "translate(-400px,0px)",
    "transform": "translate(-400px,0px)",
    "opacity": 0,
    "display": "flex"
  });

  // slide right, fade in
  setTimeout(function() {
    $element.css({
      "webkitTransform": "translate(0px,0px)",
      "MozTransform": "translate(0px,0px)",
      "msTransform": "translate(0px,0px)",
      "OTransform": "translate(0px,0px)",
      "transform": "translate(0px,0px)",
      "opacity": 1
    });
  }, TRANSTIME);
}

/**
 * Provides transitions for switching sections.
 */
function changeSection() {
  $('nav ul li').mousedown(function() {

    var $sections = $('section'); // select all sections
    var $target = $('#' + $(this).attr('id').substring(2)); // reference to target section

    if ($target.attr('data-index') > $activeSection.attr('data-index')) {
      // fade out left current
      slideOut($activeSection);
      // fade in zoom target
      fadeIn($target);

      // fadeOut($activeSection); // temp, no slide funcs

    } else if ($target.attr('data-index') < $activeSection.attr('data-index')) {
      // fade out zoom current
      fadeOut($activeSection);
      // fade in right target
      slideIn($target);
    }

    $activeSection = $target; // set active to target
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
    // move back to highlight active section

    var $slide = $('#navslide');

    $slide.css({
      'left': $('#to' + $activeSection.attr('id')).position().left,
      'width': $('#to' + $activeSection.attr('id')).outerWidth()
    });
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
  $('#home').css('display', 'flex'); // display home
  $activeSection = $('#home'); // reference active section
}

$(document).ready(function() {
  initNav(); // create navbar with initial positions

  changeSection(); // change section on click
  navliHover(); // slide on hover

  initSections(); // set to home section
});
