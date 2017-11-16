$(".body-about").click(function() {
    $("#landing").hide();
    $("#about").show();
});

$(".back-button").click(function() {
    $("#about").hide();
    $("#landing").show();
});