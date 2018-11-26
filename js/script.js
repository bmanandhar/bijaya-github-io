for (let i=0; i<5; i++){
    
    //Adds carousel-indicators to images using a for loop
    $(".carousel-indicators").append("<li data-target='#myCarousel' data-slide-to='"+i+"'></li>");
        if (i==0) {
            $("li").addClass("active");
        }

        //Loads images from images directory for carousel
        $(".carousel-inner").append("<div class='item'><img src="+"images/img0"+i+".jpg"+" alt="+"Image0"+i+"></div>");
        if (i==0){
            $(".item").addClass("active");
    }    
};

//Image on about section mouseenter-event
$("#my-image").mouseenter(function() {
    $(this).fadeTo(0,.8);
});

//mouseleave-event, back to default value
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

//Form validation check
function checkForm(form)
{
  // validation fails if the input is blank
  if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  // validation was successful
  return true;
}
