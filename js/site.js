$(document).ready(init());

function init(){
  $("body").fadeIn("slow");
  type();
  cursor();
  navAnimation();
  scrollMotion();
  buttonHover();
  pageHover();
}

//===================================================================
//Typing
//===================================================================
function type(){
    let length = 0;
    const typingFunctionId = window.setInterval(() => {
      const codeString = `Welcome! Thanks for visiting my website. While you are here, be sure to check out my portfolio and contact me if you are interested in having me do any work for you!`;
      let printString = codeString.substring(0, length);
      $("#codeText").html(printString).append("<p id='codeCursor'>|</p>");
      if(length !== codeString.length){
        length++;
      }
      else if(length === codeString.length) {
        window.clearTimeout(typingFunctionId);
      }
  }, 50);
}

function cursor(){
  const cursor = window.setInterval(() => {
    $("#codeCursor").fadeTo("slow", .33).delay(200).fadeTo("slow", 1);
  }, 1000);
}

//===================================================================
//Navigation
//===================================================================
function navAnimation(){
  let itemIndex;
  let label;
  $(".nav-item").hover(
    //hover on
    function (e){
      itemIndex = $(".nav-item").index(this);
      label = $(".nav-label").get(itemIndex);
      label.classList.add("visible");
    }, //end hover on
    //hover off
    function (e) {
      label.classList.remove("visible");
    } //end hover off
  ); //end hover listener
}//end navAnimation

function scrollMotion() {
  $("a").click(function(e){
    let location = this.hash;
    $("html").animate({
      scrollTop: $(location).offset().top
    }, 750);
  });
} //end scrollMotion


//===================================================================
//Button Effects
//===================================================================
function buttonHover(){
  $(".site-link").hover(function() {
    $(this).css("background-color", "#d64f3e");
    $(this).css("transition", ".25s");
    $(this).css("transform", "scale(1.1)");
  },
  function(){
    $(this).css("background-color", "rgb(16,25,34)");
    $(this).css("transition", ".2s");
    $(this).css("transform", "scale(1)");
  });
}

//===================================================================
//Hover Effects
//===================================================================
function pageHover(){
  $("header").hover(function(){
    $("header").css("opacity", "1");
  }, function(){
    $("header").css("opacity", ".9");
  });

  $("header a").hover(function(e){
    $(this).css("color", "white");
    $(this).css("cursor", "pointer");
  }, function(){
    $(this).css("color", "rgb(33,39,40)");
    $("header a").css("cursor", "default");
  });

  $(".navbar").hover(function(){
    $(".navbar").css("background-color","rgba(0,0,0,.25)");
    $(".navbar a").css("color", "rgb(22,25,26)");
  }, function(){
    $(".navbar").css("background-color", "transparent");
    $(".navbar a").css("color", "rgb(33,39,40)");
  });

  $(".nav-item").hover(function(e){
    $(this).css("color", "#d64f3e");
  }, function(){
    $(this).css("color", "#16191a");
  });

  $(".card").hover(function(){
    $(this).find(".cardText").css("opacity", ".95");
    $(this).find(".cardText").css("background-color", "#324c66");
  }, function(){
    $(this).find(".cardText").css("opacity", "0");
    $(this).find(".cardText").css("background-color", "transparent");
  });

}
