/******************** EVENTS SCRIPTS ********************/

////////// VARIABLES //////////
var $activeNode;
var $activePage;
var defaultBg;

/******************** METHODS ********************/

////////// EVENT PAGE //////////

/**
 * Animations for interactions with timeline
 */
function animEvents() {
  // animation into subpage
  $(".node").click(function() {
    var $node = $(this); // reference clicked node
    $activeNode = $node; // save to global variable

    animTimeline();
    animNode();
    animPage();
  });

  // animation out of subpage
  $('.back').click(function() {
    animPageBack();
    animNodeBack();
    animTimelineBack();
  });
}

/**
 * Animation for timeline
 */
function animTimeline() {
  // slide timeline and nodes away
  fadeOut($('#bar'));
  $('.node').not($activeNode).each(function() {
    fadeOut($(this));
  });
}

/**
 * Animation for clicked node
 */
function animNode() {
  // move node left
  $activeNode.css({
    "top": "0px",
    "left": "0px"
  });

  // expand node
  setTimeout(function() {
    $activeNode.css({
      "webkitTransform": "scale(150)",
      "MozTransform": "scale(150)",
      "msTransform": "scale(150)",
      "OTransform": "scale(150)",
      "transform": "scale(150)",
      "background": "black"
    });
  }, 500);

  // fade node
  setTimeout(function() {
    $activeNode.css("opacity", 0);
  }, 800);

  // hide timeline
  setTimeout(function() {
    $("#timeline").css("display", "none");
  }, 1100);
}

/**
 * Animation for events subpages
 */
function animPage() {

  setTimeout(function() {
    $cover = $('#cover');
    fadeIn($cover);
    $cover.css('display', 'block');

  }, 250);

  // fade in corresponding pages
  $activePage = $('#page' + $activeNode.attr('id').substring(4)); // reference to page section
  setTimeout(function() {

    fadeIn($activePage);
    $img = $('#' + $activePage.attr('id') + ' .gallery_slides' + ' img:first-child');
    selectGalleryImage($img);
  }, 1100);
}

/**
 * Animation for subpage on back function
 */
function animPageBack() {
  fadeOut($('#cover'));
  fadeOut($activePage);
}

/**
 * Animation for node on back function
 */
function animNodeBack() {
  $('#timeline').css("display", "flex");

  setTimeout(function() {
    $activeNode.removeAttr('style');
  }, 300);
}

/**
 * Animation for timeline on back function
 */
function animTimelineBack() {
  fadeIn($('#bar'));
  $('.node').not($activeNode).each(function() {
    fadeIn($(this));
  });
  $('#bg').css('background-image', defaultBg);
}

////////// EVENT GALLERIES //////////

/**
 * Animates gallery by assigning mouse event actions for gallery mouseenter/leave, image click, and arrow clicks
 */
function animGallery() {
  $gallery = $('.event_gallery'); // reference whole gallery
  $arrows = $('.gallery_arrow'); // reference arrows
  $leftarrow = $('.gallery_left'); // reference left arrow
  $rightarrow = $('.gallery_right'); // reference right arrow
  $slides = $('.gallery_slides'); // reference image container
  $picture = $('.gallery_pic'); // reference main image

  // show gallery_slides when entering div
  $gallery.mouseenter(function() {
    showGalleryControls();
  });

  // hide gallery_slides when leaving div
  $gallery.mouseleave(function() {
    hideGalleryControls();
  });

  $leftarrow.click(function() {
    // console.log $($activePage.attr('id') + ' .activeImg'
    selectGalleryImage($('#' + $activePage.attr('id') + ' .activeImg').prev());
  });

  $rightarrow.click(function() {
    selectGalleryImage($('#' + $activePage.attr('id') + ' .activeImg').next());
  });

  // change main image to selected
  $('.gallery_slides img').click(function() {
    selectGalleryImage($(this));
  });
}

function setActiveImg($image) {
  $('.gallery_slides img').removeClass('activeImg');
  $image.addClass('activeImg');
  console.log($image.attr('src') + "is active img");
}

function showGalleryControls() {
  fadeIn($arrows);
  slideIn($slides, 'up');

}

function hideGalleryControls() {
  fadeOut($arrows);
  slideOut($slides, 'down');
}

function selectGalleryImage($image) {
  console.log($image + 'and length: ' + $image.length);
  if ($image.length > 0) { // valid reference
    setActiveImg($image);
    var imageLink = $image.attr('src');
    fadeOut($picture);
    setTimeout(function() {
      $picture.attr('src', imageLink);
      fadeIn($picture);
    }, 250);

    setTimeout(function() {
      var newbg = 'url("' + imageLink + '")';
      $('#bg').css('background-image', newbg);
    }, 500);
  }
  return;
}

/**
 * Init event subpage css display
 */
function initPages() {
  $('.event_page').css('display', 'none');
}

function initGalleries() {
  $('.gallery_arrow').css('display', 'none');
  $('.gallery_slides').css('display', 'none');
  defaultBg = $('#bg').css('background-image'); // save reference to default bg
}

$(document).ready(function() {
  initPages();
  initGalleries();
  animEvents();
  animGallery();
});
