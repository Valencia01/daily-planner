// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  document.getElementById("save9").addEventListener("click", eventText9)
  var nine = document.getElementById("userInput9");
  nine.innerText = localStorage.getItem("input9");

  document.getElementById("save10").addEventListener("click", eventText10)
  var ten = document.getElementById("userInput10");
  ten.innerText = localStorage.getItem("input10");

  document.getElementById("save11").addEventListener("click", eventText11)
  var eleven = document.getElementById("userInput11");
  eleven.innerText = localStorage.getItem("input11");

  document.getElementById("save12").addEventListener("click", eventText12)
  var twelve = document.getElementById("userInput12");
  twelve.innerText = localStorage.getItem("input12");

  document.getElementById("save13").addEventListener("click", eventText13)
  var thirteen = document.getElementById("userInput13");
  thirteen.innerText = localStorage.getItem("input13");

  document.getElementById("save14").addEventListener("click", eventText14)
  var fourteen = document.getElementById("userInput14");
  fourteen.innerText = localStorage.getItem("input14");

  document.getElementById("save15").addEventListener("click", eventText15)
  var fifteen = document.getElementById("userInput15");
  fifteen.innerText = localStorage.getItem("input15");

  document.getElementById("save16").addEventListener("click", eventText16)
  var sixteen = document.getElementById("userInput16");
  sixteen.innerText = localStorage.getItem("input16");

  document.getElementById("save17").addEventListener("click", eventText17)
  var seventeen = document.getElementById("userInput17");
  seventeen.innerText = localStorage.getItem("input17");


  $('#currentDay').text(moment().format("dddd, MMMM Do"));


  function eventText9(){
    var inputText9 = document.querySelector("#userInput9").value;
    if(inputText9 !== ""){

      localStorage.setItem("input9", inputText9);
    }
  

  }

  function eventText10() {
    var inputText10 = document.querySelector("#userInput10").value;
    if(inputText10 !== ""){
   
      localStorage.setItem("input10", inputText10);
    }
  }

  function eventText11() {
    var inputText11 = document.querySelector("#userInput11").value;
    if(inputText11 !== ""){
     
      localStorage.setItem("input11", inputText11);
    }

  }

  function eventText12() {
    var inputText12 = document.querySelector("#userInput12").value;
    if(inputText12 !== ""){
    
      localStorage.setItem("input12", inputText12);
    }

  }

  function eventText13() {
    var inputText13 = document.querySelector("#userInput13").value;
    if(inputText13 !== ""){
    
      localStorage.setItem("input13", inputText13);
    }

  }

  function eventText14() {
    var inputText14 = document.querySelector("#userInput14").value;
    if(inputText14 !== ""){
    
      localStorage.setItem("input14", inputText14);
    }

  }

  function eventText15() {
    var inputText15 = document.querySelector("#userInput15").value;
    if(inputText15 !== ""){
    
      localStorage.setItem("input15", inputText15);
    }

  }

  function eventText16() {
    var inputText16 = document.querySelector("#userInput16").value;
    if(inputText16 !== ""){
   
      localStorage.setItem("input16", inputText16);
    }

  }

  function eventText17() {
    var inputText17 = document.querySelector("#userInput17").value;
    if(inputText17 !== ""){
    
      localStorage.setItem("input17", inputText17);
    }

  }
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
