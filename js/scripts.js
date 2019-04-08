//user interface


/*player identification */
$(document).ready(function () {
    $("#begin").click(function () {
        var nameOne = $("#btnplayer1").val();

        $("#playeryou").html(nameOne);
    });
});

$(document).ready(function () {
    $("#start").click(function () {
        var nameTwo = $("#btnplayer2").val();

        $("#playerthem").html(nameTwo);
    });
});


/*hide and show functions*/
$(document).ready(function () {
    $("#test").click(function () {
        $("#outshow").show();
    });
});

$(document).ready(function () {
    $("#dice-Roll1").click(function () {
        $("#outburst2").hide();
        $("#dice-Hold1").click(function () {
            $("#outburst2").show();
            $("#outburst1").hide();
            $("#dice-Hold2").click(function () {
                $("#outburst2").hide();
                $("#outburst1").show()
            });
        });
    });
});


// business logic
$(document).ready(function () {
    var output2 = 0
    var totalscore = 0
    $("#dice-Roll2").click(() => {
        var random2 = Math.floor(6 * Math.random()) + 1;
        $("#outPut2").text(output2);
        $("#outPut2").text(random2);
        $("#dice-Hold2").click(function () {

            totalscore = totalscore + random2;

            $("#total-score-2").text(totalscore)
            output2 = 0
        });
    });
});
$(document).ready(function () {
    var output1 = 0
    var totalscore = 0
    $("#dice-Roll1").click(() => {
        var random1 = Math.floor(6 * Math.random()) + 1;
        $("#outPut1").text(output1);
        $("#outPut1").text(random1);
        $("#dice-Hold1").click(function () {

            totalscore = totalscore + random1;

            $("#total-score-1").text(totalscore)
            output1 = 0
        });
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


function reset() {
    location.reload();
}