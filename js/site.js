$(document).ready(init());

function init(){
  $("body").fadeIn("slow");
  type();
  cursor();
  navAnimation();
  scrollMotion();
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
