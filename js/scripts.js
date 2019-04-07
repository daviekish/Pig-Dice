// business logic
$(document).ready(function () {
$("#dice-Roll1").click(() => {
 var output1 = Math.floor((Math.random() * 6) + 1);
 $("#outPut1").text("top number" + " : " + output1);
 });
 });


$(document).ready(function () {
  $("#dice-Roll2").click(() => {
  var output2 = Math.floor((Math.random() * 6) + 1);
  $("#outPut2").text("top number1" + " : " + output2)
  });
 });