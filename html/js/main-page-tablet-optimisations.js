$(document).ready(function () {
   if ($(window).width() < 1250) {
      $(".event").addClass("l6")
      $(".about").addClass("l6");
      $("#third-about").addClass("push-l3");
   }
   else {
      $(".about").addClass("l4");
   }
});

$(window).resize(function () {
   if ($(window).width() < 1250) {
      $(".event").addClass("l6");
      $(".about").addClass("l6");
      $("#third-about").addClass("push-l3");
   }
   else {
      $(".event").removeClass("l6");
      $(".about").removeClass("l6");
      $("#third-about").removeClass("push-l3");
      $(".about").addClass("l4");
   }
});