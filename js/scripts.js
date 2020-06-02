$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".walrus-showing1").slideToggle();
    $(".walrus-hidden1").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".walrus-showing2").fadeIn(2000);
    $(".walrus-hidden2").fadeIn(2000);
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $(".walrus-hidden2").fadeOut(2000);
    $(".walrus-showing2").fadeOut(2000);
  });
});