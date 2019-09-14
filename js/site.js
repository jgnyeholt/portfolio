
$(document).ready(init());

function init(){
  type();
  cursor();
  navAnimation();
}

//===================================================================
//Typing
//===================================================================
function type(){
    let length = 0;
    const typingFunctionId = window.setInterval(() => {
    const codeString = `function greet() { \n   console.log('Hello World'); \n} \ngreet();`;
  //  console.log("length" + length);
    let printString = codeString.substring(0, length);
  //  console.log("substring" + printString);
    $("#codeText").html(printString).append("<p id='codeCursor'>|</p>");
    if(length !== codeString.length){
      length++;
    }
    else if(length === codeString.length) {
      window.clearTimeout(typingFunctionId);
    }
  //  console.log("new length" + length);
  }, 100);
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
  $(".nav-item").mouseenter(function (e) {
    let id;
    $(".nav-item").off("mouseleave");


    let index = $(".nav-item").index(this);
    let item = $(".nav-label").get(index);
    // item.style.opacity = "1";
    // item.style.transform = "translateX(-10px)";
    //item.style.transition = ".25s";
    if(item.classList.contains("hidden")){
          window.clearTimeout(id);
      item.classList.remove("hidden");
      item.classList.add("visible");
    }
    else if (item.classList.contains("visible")){
      id = setTimeout(() => {
       $(".nav-item").mouseleave(function () {
      item.classList.remove("visible");
      item.classList.add("hidden");
         });
       }, 250);
    }


    // id = setTimeout(() => {
    //   $(".nav-item").mouseleave(function () {
    //     //item.style.opacity = "0";
    //   //  item.style.transform = "translateX(200px)";
    //   //  item.style.transition = ".25s";
    //   item.classList.remove("visible");
    //   item.classList.add("hidden");
    //   });
    // }, 250);


  }); //end mouseenter

  // $(".nav-label").mouseleave(function () {
  //   // let index = $(".nav-item").index(this);
  //   // let item = $(".nav-label").get(index);
  //   console.log(this);
  //   this.style.opacity = "0";
  //   this.style.transform = "translateX(200px)";
  //   this.style.transition = ".25s";
  // });

}
