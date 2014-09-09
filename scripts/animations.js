/************************ NAVBAR & SECTION TRANSITIONS ************************/

////////// Constants //////////
var $activeSection; // save reference to active section
var sectionIDs = []; // save reference to section IDs
var TRANSTIME = 250; // default transition time
var BUFFERTIME = 10; // spacer transitions

var HEX_STEPVAL = 2; // parallax step value per page for hexagons
var BG_STEPVAL = 5; // parallax step value per page for bg image

var hexPos = 0; // hexagon parallax scrolling position
var bgPos = 0; // background parallax scrolling position

/**
 * Fade and zoom in on selected element.
 * @param  $element Element to perform fadeIn on.
 */
function fadeIn($element) {
  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "scale(0.8)",
    "MozTransform": "scale(0.8)",
    "msTransform": "scale(0.8)",
    "OTransform": "scale(0.8)",
    "transform": "scale(0.8)",
    "opacity": 0
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
 * @param  $element Element to perform fadeOut on.
 */
function fadeOut($element) {
  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "scale(1)",
    "MozTransform": "scale(1)",
    "msTransform": "scale(1)",
    "OTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": 1
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
    $element.css('display', 'none');
  }, TRANSTIME);
}

/**
 * Fade and no zoom in on selected element.
 * @param  $element Element to perform fadeIn on.
 */
function fadeInSimple($element) {
  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "scale(1)",
    "MozTransform": "scale(1)",
    "msTransform": "scale(1)",
    "OTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": 0
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
 * @param  $element Element to perform fadeOut on.
 */
function fadeOutSimple($element) {
  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "scale(1)",
    "MozTransform": "scale(1)",
    "msTransform": "scale(1)",
    "OTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": 1
  });

  // zoom out, fade out
  $element.css({
    "webkitTransform": "scale(1)",
    "MozTransform": "scale(1)",
    "msTransform": "scale(1)",
    "OTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": 0
  });

  // hide after transition
  setTimeout(function() {
    $element.css('display', 'none');
  }, TRANSTIME);
}

/**
 * Fade and slide in from left side selected element.
 * @param   $element  Element to perform fadeIn on.
 * @param   direction Can be up, down, left, or right
 */
function slideOut($element, direction) {
  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "translate(0px,0px)",
    "MozTransform": "translate(0px,0px)",
    "msTransform": "translate(0px,0px)",
    "OTransform": "translate(0px,0px)",
    "transform": "translate(0px,0px)",
    "opacity": 1
  });

  // determine direction based on value of direction
  var dir = '0px, 0px';
  if (direction == 'left')
    dir = '-400px, 0px';
  else if (direction == 'right')
    dir = '400px, 0xpx';
  else if (direction == 'up')
    dir = '0px, -400px';
  else if (direction == 'down')
    dir = '0px, 400px';
  else
    dir = '0px, 0px';

  // slide and fade out
  $element.css({
    "webkitTransform": "translate(" + dir + ")",
    "MozTransform": "translate(" + dir + ")",
    "msTransform": "translate(" + dir + ")",
    "OTransform": "translate(" + dir + ")",
    "transform": "translate(" + dir + ")",
    "opacity": 0
  });

  // hide after transition
  setTimeout(function() {
    $element.css('display', 'none')
  }, TRANSTIME);
}

/**
 * Fade and slide out to left side selected element.
 * @param  $element Element to perform fadeIn on.
 */
function slideIn($element, direction) {

  // determine direction based on value of direction
  var dir = '0px, 0px';
  if (direction == 'right')
    dir = '-400px, 0px';
  else if (direction == 'left')
    dir = '400px, 0xpx';
  else if (direction == 'down')
    dir = '0px, -400px';
  else if (direction == 'up')
    dir = '0px, 400px';
  else
    dir = '0px, 0px';

  // reset
  $element.removeAttr('style');
  $element.css({
    "webkitTransform": "translate(" + dir + ")",
    "MozTransform": "translate(" + dir + ")",
    "msTransform": "translate(" + dir + ")",
    "OTransform": "translate(" + dir + ")",
    "transform": "translate(" + dir + ")",
    "opacity": 0
  });

  // slide and fade in
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
 * Scrolls background in parallax fashion to the left or right.
 * @param  direction 'left' or 'right'
 */
function parallax(target) {
  // references
  var curPageNum = sectionIDs.indexOf('to' + $activeSection.attr('id'));
  var tarPageNum = sectionIDs.indexOf('to' + target.attr('id'));
  var pageDiff = curPageNum - tarPageNum;

  /************ middle parallax layer ************/
  hexPos += HEX_STEPVAL * pageDiff;

  $('#hexagons').css({
    "webkitTransform": "translate(" + hexPos + "vw,0px)",
    "MozTransform": "translate(" + hexPos + "vw,0px)",
    "msTransform": "translate(" + hexPos + "vw,0px)",
    "OTransform": "translate(" + hexPos + "vw,0px)",
    "transform": "translate(" + hexPos + "vw,0px)"
  });

  /************ background parallax layer ************/
  bgPos += BG_STEPVAL * pageDiff;

  $('#bg').css({
    "webkitTransform": "translate(" + bgPos + "vw,0px)",
    "MozTransform": "translate(" + bgPos + "vw,0px)",
    "msTransform": "translate(" + bgPos + "vw,0px)",
    "OTransform": "translate(" + bgPos + "vw,0px)",
    "transform": "translate(" + bgPos + "vw,0px)"
  });

}

/**
 * Provides transitions for switching sections.
 */
function changeSection() {
  $('nav ul li').mousedown(function() {
    var $sections = $('section'); // select all sections
    var $target = $('#' + $(this).attr('id').substring(2)); // reference to target section

    // target section to the right
    if ($target.attr('data-index') > $activeSection.attr('data-index')) {
      // fade out left current
      slideOut($activeSection, 'left');
      // fade in zoom target
      fadeIn($target);
      // move backgrounds to the left
      parallax($target);

      // target section to the left
    } else if ($target.attr('data-index') < $activeSection.attr('data-index')) {
      // fade out zoom current
      fadeOut($activeSection);
      // fade in right target
      slideIn($target, 'right');
      // move backgrounds to the right
      parallax($target);
    }

    $activeSection = $target; // set active to target
  });
}

/**
 * Highlight selection of respective list element on hover.
 */
function navliHover() {
  var $slide = $('#navslide'); // reference to navigation slider
  // mouse enters element
  $('nav ul li').hover(function() {
    var $item = $(this); // reference li hovered on

    //retrieve left position and width
    var left = $item.position().left;
    var width = $item.outerWidth();

    // set left position and width
    $slide.css('left', left);
    $slide.width(width);

  }, function() { // mouse leaves element
    $slide.css({ // move back to highlight active section
      'left': $('#to' + $activeSection.attr('id')).position().left,
      'width': $('#to' + $activeSection.attr('id')).outerWidth()
    });
  });
}

/**
 * Save reference to nav list elements. Initialize navbar highlighter in appropriate position.
 */
function initNav() {
  // retrieve all section IDs
  $('nav ul').children().each(function() {
    sectionIDs.push(this.id);
  });

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
