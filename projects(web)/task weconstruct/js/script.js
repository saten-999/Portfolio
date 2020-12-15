// open search
$("#search_media").click(function(){
    $("#searching_input").css("dispaly","block");
    $("#searching_input").toggle()
               })
$("#search_full").click(function(){
    $("#searching_input").css("dispaly","block");
    $("#searching_input").toggle()
               })
// sticky navbar
window.onscroll = function() {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// open video 

function openVideo() {
  document.getElementById("video_div").style.height = "100%";
}

function closeVideo() {
  document.getElementById("video_div").style.height = "0%";
}



    //  running number

    $(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($("#cont5")) && !viewed) {
      viewed = true;
      $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
  
}


    // $(".count").each(function () {
    //   $(this)
    //     .prop("Counter", 0)
    //     // .delay(7000)
    //     .animate(
    //       {
    //         Counter: $(this).text()
    //       },
    //       {
    //         duration: 4000,
    //         easing: "swing",
    //         step: function (now) {
    //           $(this).text(Math.ceil(now));
    //         }
    //       }
    //     );
    // });

  $('#cont2 img').parent().hover(
    
    function() {
      if($( this ).children().attr('src')== "img/cont2_2.png"){
        $( this ).children().attr("src", "img/cont2_22.png");
      }
      if($( this ).children().attr('src')== "img/cont2_3.png"){
        $( this ).children().attr("src", "img/cont2_33.png");
      }
      if($( this ).children().attr('src')== "img/cont2_4.png"){
        $( this ).children().attr("src", "img/cont2_44.png");
      }
      
    }, function() {
      if($( this ).children().attr('src')== "img/cont2_22.png"){
        $( this ).children().attr("src", "img/cont2_2.png");
      }
      if($( this ).children().attr('src')== "img/cont2_33.png"){
        $( this ).children().attr("src", "img/cont2_3.png");
      }
      if($( this ).children().attr('src')== "img/cont2_44.png"){
        $( this ).children().attr("src", "img/cont2_4.png");
      }}
      
  )