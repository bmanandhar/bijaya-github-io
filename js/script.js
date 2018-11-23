
// $(document).ready(function(){
//     $("img").mouseenter(function(){
//         $("img").fadeOut(1000);
//     });

//   $("img").mouseleave(function(){
//     $("img").fadeOut(1000);
//   });
// });


$("img").mouseenter(function(){
    $("img").fadeTo(1000, 0.5);
});
$("img").mouseleave(function(){
        $("img").fadeIn();
});


