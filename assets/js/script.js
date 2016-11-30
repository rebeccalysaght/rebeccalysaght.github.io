$(document).ready(function() {

$('#about').click(function() {
  $('#modal').fadeIn(1000, "swing");
});

$('#Surveys').click(function() {
  $('#container1').fadeOut(1000, "swing");
  $('#container2').fadeIn(1000, "swing");
});

$("li").hover(function() {
    $(this).append($("<span> --</span>"));
    $(this).prepend($("<span>-- </span>"));
  }, function() {
    $(this).find("span:last").remove();
    $(this).find("span:last").remove();
  });

$('#title').click(function() {
  $("#container2").fadeOut(1000, "swing");
  $("#container3").fadeOut(1000, "swing");
  $('#container1').fadeIn(1000, "swing");

});

$('#Suggestions').click(function() {
  $('#container2').fadeOut(1000, "swing");
  $('#container1').fadeOut(1000, "swing");
  $('#container3').fadeIn(1000, "swing");
});

$('#Forms').click(function() {
  $('#container2').fadeOut(1000, "swing");
  $('#container1').fadeOut(1000, "swing");
  $('#container3').fadeOut(1000, "swing");
  $('#container4').fadeIn(1000, "swing");
});

$('#Rules').click(function() {
  $('#container2').fadeOut(1000, "swing");
  $('#container1').fadeOut(1000, "swing");
  $('#container3').fadeOut(1000, "swing");
  $('#container4').fadeOut(1000, "swing");
  $('#container5').fadeIn(1000, "swing");
});

$('#modal-overlay').click(function() {
  $('#modal').fadeOut(1000, "swing");
});

$('#contact').click(function() {
  $('#modal2').fadeIn(1000, "swing");
});

$('#modal-overlay2').click(function() {
  $('#modal2').fadeOut(1000, "swing");
});
});
