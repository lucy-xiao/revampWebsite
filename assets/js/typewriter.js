// set up text to print, each item in array is new line
var aText = new Array("Hello!", "My name is Lucy and I'm a student at UC Berkeley studying Computer Science.", "I am a TA for the Web Design Decal, previous instructor for Into to Web Dev course, and previous instructor for the iOS Decal.");
var aText = new Array("Hello! My name is Lucy and I'm a student at UC Berkeley studying Computer Science. I am a TA for the Web Design Decal, previous instructor for Into to Web Dev course, and previous instructor for the iOS Decal.");
// var aText = new Array("Hello! ","My name is Lucy and I'm a student at UC Berkeley studying Computer Science. I am a TA for the Web Design Decal, previous instructor for Into to Web Dev course, and previous instructor for the iOS Decal.");

var iSpeed = 25; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 

function typewriter()
{
 let sContents =  ' ';
 let iRow = Math.max(0, iIndex-iScrollAt);
 let destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + "<br />";
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    height = parseInt($(".body-text").css("height"), 10);
  width = parseInt($(".body-text").css("width"), 10);
  $(".body-text").css("margin", "-"+height/2 + "px 0 0 -" +width/2+"px");
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();