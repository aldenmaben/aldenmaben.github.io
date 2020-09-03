$(document).ready(function() {
  $("#tabs").show();
  $("#numpad").show();
  $("#ContactContent").hide();
  $("#contactForm").hide();
});

$("#dialerBtn").click(function() {
  $("#numpad").show();
  $("#ContactContent").hide();
  $("#contactForm").hide();
});

$("#contactsBtn").click(function() {
  $("#numpad").hide();
  $("#ContactContent").show();
  $("#contactForm").hide();
});

$("#add_newContactBtn").click(function() {
  $("#numpad").hide();
  $("#ContactContent").hide();
  $("#contactForm").show();
});
