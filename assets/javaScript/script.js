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

function blinkIt1(event) {
  // event.stopPropagation(blink);
  var blinks = document.getElementsByClassName("blink1");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
    // if (blink.style.visibility == "visible") {
    //   clearInterval(setInterval);
    // } else {
    //   return blinkIt1;
    // }
  }
}

// setInterval(blinkIt1, 3000 /* blinking interval in ms */);

console.log(setInterval);

// password character pool
// use .split() in the functions to make into array
var alphL = "abcdefghijklmnopqrstuvwxyz";
var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spcl = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var arrAlphC = alphC.split("");
var arrNum = num.split("");
var arrSpcl = spcl.split("");

// prompt windows

// html element references
var genEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");

// need to add event addEventListener to activate the generate / copy buttons on click

// NEED parseint the value input in the prompt
// NEED if statement to ensure parameters of input are correct, if not send new prompt

// if (confirm(alphLOn || alphC || numOn || spclOn)) {}

// function getRandomInt(arrAlphL) {
//   var arrAlphL = alphL.split("");

//   return Math.floor(Math.random() * Math.floor(arrAlphL.length));
// }

console.log(this);

// password(prompt answer)
genEl.addEventListener("click", function(event) {
  event.preventDefault();
  var numPick = prompt("Type a number between 8 and 128");

  if (pwLength < 8 || pwLength > 128 || isNaN) {
    alert("Please enter a number between 8 and 128");
    submitOk = "false";
  }

  if (submitOk == "false") {
    return numPick;
  }

  var alphLOn = confirm("Would you like to use lowercase letters?");
  var alphCOn = confirm("Would you like to use uppercase letters?");
  var numOn = confirm("Would you like to use numbers?");
  var spclOn = confirm("Would you like to use special characters?");
  var characters = alphLOn.true ? (characters += alphL) : "";
  var pwLength = parseInt(console.log(numPick));
  var yourPW = document.querySelector("#textarea");

  alphCOn.true ? (characters += alphC) : "";
  numOn.true ? (characters += num) : "";
  spclOn.true ? (characters += spcl) : "";
  yourPW.value = password(pwLength.value, characters);
});

function password(l, characters) {
  var pwd = "";
  for (i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return pwd;
}
// use the '.push' function to add to the array of PW values in the random value generator function

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   var tag = document.createElement(tagName);
//   tag.textContent = "This was made via prompts. It's a " + tagName;
//   document.body.appendChild(tag);
// }

// create element to contain the password or change element???
// var pTag = document.createElement("p")
