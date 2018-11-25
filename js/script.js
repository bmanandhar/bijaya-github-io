
//Image on about section mouseenter-event
$("#my-image").mouseenter(function() {
    $(this).fadeTo(0,.8);
});

//Image on about section mousleave-event
$("#my-image").mouseleave(function() {
        $(this).css("opacity",100);
});

//hover-event with class replacement css
$(".job").hover(function() {
    $(this).removeClass().addClass("job-on-hover");
});

//on-click hamburger to show navigation on small screen
$(".hamburger").click(function() {
    $("header").css("display","none");
    $(".mobile-menu").show();
});

//quote-section showing jQuery-Effects animation
$(".two").mouseenter(function() {
    $(this).animate({left: "100px"}, "slow");
    $(this).animate({fontSize: "3em"}, "slow");
});

$(".two").mouseleave(function() {
    $(this).value = $(this).swing; // Original value ???
})
