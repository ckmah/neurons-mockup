/******************** CUSTOM JAVASCRIPT FUNCTIONS ********************/
/**
 * Recursive version of JQuery removeAttr(attribute) function.
 */
function removeAllAttr($element, attr) {
  $element.removeAttr(attr);
  if ($element.children().length == 0) {
    return;
  }
  $element.children().each(function() {
    return removeAllAttr($(this), attr);
  });
}

