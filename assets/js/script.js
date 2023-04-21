
$(document).ready(function () {

  currentHour();

  //These are all the event listeners for each section button
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


  //This is the date at the top
  $('#currentDay').text(moment().format("dddd, MMMM Do"));

  //This function assigns a number to each hour and depending if it matches the current hour the colors will change accordingly
  function currentHour() {
    //This recieves all the div elements to be able to change them
    var nineClass = document.getElementById("hour-9");
    var tenClass = document.getElementById("hour-10");
    var elevenClass = document.getElementById("hour-11");
    var twelveClass = document.getElementById("hour-12");
    var thirteenClass = document.getElementById("hour-13");
    var fourteenClass = document.getElementById("hour-14");
    var fifteenClass = document.getElementById("hour-15");
    var sixteenClass = document.getElementById("hour-16");
    var seventeenClass = document.getElementById("hour-17");

    var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17

    //this is the dayjs api and checks the current hour to be able to compare it to all the sections
    var theDay = dayjs();
    var theHour = theDay.format('H');

    //These are all the if statements to see weather that hour is in the past present or future
    if(theHour == hour9 ) {
      nineClass.classList.add('present');
    }
    else if(theHour > hour9) {
      nineClass.classList.add('past');
    }
    else if(theHour < hour) {
      nineClass.classList.add('future');
    }

    if(theHour == hour10 ) {
      tenClass.classList.add('present');
    }
    else if(theHour > hour10) {
      tenClass.classList.add('past');
    }
    else if(theHour < hour10) {
      tenClass.classList.add('future');
    }

    if(theHour == hour11 ) {
      elevenClass.classList.add('present');
    }
    else if(theHour > hour11) {
      elevenClass.classList.add('past');
    }
    else if(theHour < hour11) {
      elevenClass.classList.add('future');
    }

    if(theHour == hour12 ) {
      twelveClass.classList.add('present');
    }
    else if(theHour > hour12) {
      twelveClass.classList.add('past');
    }
    else if(theHour < hour12) {
      twelveClass.classList.add('future');
    }

    if(theHour == hour13 ) {
      thirteenClass.classList.add('present');
    }
    else if(theHour > hour13) {
      thirteenClass.classList.add('past');
    }
    else if(theHour < hour13) {
      thirteenClass.classList.add('future');
    }

    if(theHour == hour14 ) {
      fourteenClass.classList.add('present');
    }
    else if(theHour > hour14) {
      fourteenClass.classList.add('past');
    }
    else if(theHour < hour14) {
      fourteenClass.classList.add('future');
    }

    if(theHour == hour15 ) {
      fifteenClass.classList.add('present');
    }
    else if(theHour > hour15) {
      fifteenClass.classList.add('past');
    }
    else if(theHour < hour15) {
      fifteenClass.classList.add('future');
    }

    if(theHour == hour16 ) {
      sixteenClass.classList.add('present');
    }
    else if(theHour > hour16) {
      sixteenClass.classList.add('past');
    }
    else if(theHour < hour16) {
      sixteenClass.classList.add('future');
    }

    if(theHour == hour17 ) {
      seventeenClass.classList.add('present');
    }
    else if(theHour > hour17) {
      seventeenClass.classList.add('past');
    }
    else if(theHour < hour17) {
      seventeenClass.classList.add('future');
    }
    

    
  }


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
  
});
