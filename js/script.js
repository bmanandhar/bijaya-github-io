
$("#my-image").mouseenter(function(){
    $(this).fadeTo(0,.8);
});
$("#my-image").mouseleave(function(){
        $(this).css("opacity",100);
});

$("#job").hover(function() {
    $(this).css("margin-left", '85px');
    $(this).css("color", "#786400");   
    $(this).css("font-family","-apple-system"); 
});

$("#hamburger").click(function() {
    $("#mobile-menu").css("display","inblock");   //show();
})

console.log("Hello!!!");

function checkForBlank() {
    if ($(".name").value == "") {
        alert("please enter name");
        return false;
    }
}


