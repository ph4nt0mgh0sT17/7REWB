$(document).ready(function() {
    $("#collapseExample").on("shown.bs.collapse", function (e) {
        $("#expandButton").text("Collapse");
       $("html, body").animate({
           scrollTop: $("#collapseExample").offset().top
       }, 500);
    });

    $("#collapseExample").on("hidden.bs.collapse", function (e) {
        $("#expandButton").text("Read more ...");

        $("html, body").animate({
            scrollTop: $("#mainNews").offset().top
        }, 500);
    });
});