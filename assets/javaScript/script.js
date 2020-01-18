// try a mouse fucntion to stop the blinking while mouse over text box
function blinkIt() {
  var blinks = document.getElementsByClassName("blink");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    if (visiblity === "visible") {
      blink.style.visibility = "hidden";
      setTimeout(blinkIt, 100);
    } else {
      blink.style.visibility = "visible";
      setTimeout(blinkIt, 300);
    }
    //blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
  }
}

// setInterval(blinkIt, 1 /* blinking interval in ms */);

// to make inner blink you can switch between border and no border, or make a new class with the attributes and switched between the two

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

console.log(this);

// password(prompt answer)
genEl.addEventListener("click", function(event) {
  event.preventDefault();

  do {
    var numPick = prompt("Type a number between 8 and 128");
    var pwLength = parseInt(numPick.trim());
    console.log(pwLength);

    if (pwLength < 8 || pwLength > 128 || pwLength === NaN) {
      alert("Please enter a number between 8 and 128");
    }
  } while (pwLength < 8 || pwLength > 128 || pwLength === NaN);

  var alphLOn = confirm("Would you like to use lowercase letters?");
  var alphCOn = confirm("Would you like to use uppercase letters?");
  var numOn = confirm("Would you like to use numbers?");
  var spclOn = confirm("Would you like to use special characters?");
  var characters = "";

  alphLOn === true ? (characters += alphL) : "";
  alphCOn === true ? (characters += alphC) : "";
  numOn === true ? (characters += num) : "";
  spclOn === true ? (characters += spcl) : "";

  var yourPW = document.querySelector(".textarea");
  yourPW.textContent = password(pwLength, characters);
});

function password(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    console.log(pwd);
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
