// business logic
$(document).ready(function () {
    $("#dice-Roll1").click(() => {
        var output1 = 0
        output1 = Math.floor(6 * Math.random()) + 1;
        $("#outPut1").text("top number" + " : " + output1);
        $()
    });
});


$(document).ready(function () {
    $("#dice-Roll2").click(() => {
        var output2 = 0
        output2 = Math.floor(6 * Math.random()) + 1;
        $("#outPut2").text("top number1" + " : " + output2)
    });
});

/* the instruction tab */

function openHelp(evt, tabhelp) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabhelp).style.display = "block";
    evt.currentTarget.className += " active";
}

/*player identification */
$(document).ready(function(){
    $("#begin").click(function(){
        var nameOne = $("#btnplayer1").val();

        $("#playeryou").html( nameOne);
    });
});

$(document).ready(function () {
    $("#start").click(function () {
        var nameTwo = $("#btnplayer2").val();

        $("#playerthem").html(nameTwo);
    });
});

function reset() {
    location.reload();
}