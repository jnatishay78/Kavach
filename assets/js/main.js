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

let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > -2) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}

