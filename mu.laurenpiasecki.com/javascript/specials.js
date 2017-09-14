jQuery(document).ready(function(){

// gallery fades
 var images = [];
images[0] = "img/img1.jpg";
images[1] = "img/img2.jpg";
images[2] = "img/img3.jpg";
images[3] = "img/img4.jpg";
images[4] = "img/img5.jpg";
images[5] = "img/img6.jpg";

// hidding all the images and calling it
var i = 0;
setInterval(fadeDivs, 1000);
$(".img1").hide();
$(".img2").hide();
$(".img3").hide();  
$(".img4").hide();
$(".img5").hide();
$(".img6").hide();

//fade in and fade outs, times for fade in and out
function fadeDivs() {

    i = i < images.length ? i : 0;
    $('.img1').fadeOut(6000, function(){
        $(this).attr('src', images[i]).fadeIn(1000);
    })
    i++;
}

// clicks for Specials
$('.text_Daily').hide();
$('.text_Weekly').hide();
$('.text_Seasonaly').hide();

// hover functions, grey when hovering over Daily
$(".d").hover(
  function(){$(this).css("background","#e0e1e3");},
  function(){$(this).css("background","white");}
  ); 

$(".d").click(function(){
    $(".text_Daily").toggle();
    
});

// hover functions, grey when hovering over Weekly
$(".w").hover(
  function(){$(this).css("background","#e0e1e3");},
  function(){$(this).css("background","white");}
  ); 

$(".w").click(function(){
    $(".text_Weekly").toggle();
    
});

// hover functions, grey when hovering over Seasonally
$(".s").hover(
  function(){$(this).css("background","#e0e1e3");},
  function(){$(this).css("background","white");}
  ); 

$(".s").click(function(){
    $(".text_Seasonaly").toggle();
    
});



});// closing tag





/*$('.tblInventory').hide();

$('h2').click(function(){
  $(".tblInventory").slideUp("slow");
  $(this).next('.tblInventory').slideToggle('slow');
  
});
$(".heading").hover(
  function(){$(this).css("background","#e0e1e3");},
  function(){$(this).css("background","white");}
  ); 
//hover function
$(".desc").hide();

$("tr").hover(
  function(){$(this).css("background","#e0e1e3");},
  function(){$(this).css("background","white");}
  );// closing hover function


//show the table

$("tr").click(function(){
  $(".desc").hide();
  $(this).find(".desc").show();
});// closing click */