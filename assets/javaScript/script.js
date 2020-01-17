
// try a mouse fucntion to stop the blinking while mouse over text box
function blinkIt() {
  var blinks = document.getElementsByClassName("blink");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
  }
}

// setInterval(blinkIt, 1 /* blinking interval in ms */);

console.log(setInterval);

function blinkIt1() {
  var blinks = document.getElementsByClassName("blink1");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
    // if (blink.style.visibility == "visible") {
    // }
    //     else {
    //       return blinkIt1;
    //   }
  }
}

// setInterval(blinkIt1, 3000 /* blinking interval in ms */);

console.log(setInterval);

// password character pool
// use .split() in the functions to make into array
var alphL = "abcdefghijklmnopqrstuvwxyz";
var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = '0123456789';
var spcl = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

// prompt windows
var numPick = prompt("Type a number between 8 and 128");
var alphLOn = prompt('Would you like to use lowercase letters?');
var alphCOn = prompt('Would you like to use uppercase letters?');
var numOn = prompt('Would you like to use numbers?');
var spclOn = prompt('Would you like to use special characters?');


// html element references
var genEl = document.querySelector('generate');
var copyEl = document.querySelector('copy');

if 
(confirm(alphLOn || alphC || numOn || spclOn)) {
    
}




