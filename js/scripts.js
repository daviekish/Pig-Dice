// User Interface

// Business logic

$(document).ready(function () {
    $("#dice-roll").click(() => {
    var output = Math.floor((Math.random() * 6) + 1);
    $("#outPut1").text("top number: " + output)
    });
});