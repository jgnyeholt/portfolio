$(document).ready(init());

function init(){
  $("body").fadeIn("slow");
  //type();
  //cursor();
  navAnimation();
  scrollMotion();
  fade();
  setTimeout(type, 1200);
  setTimeout(cursor, 1200);
}

//===================================================================
//Typing
//===================================================================
function type(){
    let length = 0;
    const typingFunctionId = window.setInterval(() => {
    //  const codeString = `Welcome! Thanks for visiting my website. While you are here, be sure to check out my portfolio and contact me if you are interested in having me do any work for you!`;
    const codeString = `Web Developer `;
      let printString = codeString.substring(0, length);
      $("#codeText").html(printString).append("<p id='codeCursor'>|</p>");
      if(length !== codeString.length){
        length++;
      }
      else if(length === codeString.length) {
        window.clearTimeout(typingFunctionId);
      }
  }, 150);
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
//Fade In
//===================================================================
function fade() {
  const faders = document.querySelectorAll(".fade-in");
  const leftItem = document.querySelectorAll(".from-left");
  const rightItem = document.querySelectorAll(".from-right");
  const titleFromRight = document.querySelectorAll(".title-from-right");

  const appearOptions = {
    threshold: 0,
    rootMargin: "-10% 0% -10% 0%"
  };

  const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });

    }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  leftItem.forEach(item => {
    appearOnScroll.observe(item);
  });

  rightItem.forEach(item => {
    appearOnScroll.observe(item);
  });

  titleFromRight.forEach(item => {
    appearOnScroll.observe(item);
  });
}
