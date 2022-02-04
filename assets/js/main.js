AOS.init({
    duration: 1200,
});
/* OVERLAY*/
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(".button").click(function () {
    $(".overlay:visible").hide();
    $("#" + $(this).attr("data-showdiv")).show().style.width = "100%".height = "100%";

});
