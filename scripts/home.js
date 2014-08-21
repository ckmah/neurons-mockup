/******************** HOMEPAGE SCRIPTS ********************/
function scrollTestimonials() {
  setInterval(function() {
    $testim = $('#testimonials');
      fadeIn($testim);
  }, 5000);
}

$(document).ready(function() {
  scrollTestimonials();
});
