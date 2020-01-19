// try a mouse fucntion to stop the blinking while mouse over text box
function blinkIt() {
  var blinks = document.getElementsByTagName("html");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    if (visiblity === "visible") {
      blink.style.visibility = "hidden";
      setTimeout(blinkIt, 0.1);
    } else {
      blink.style.visibility = "visible";
      setTimeout(blinkIt, 3000);
    }
  }
}
blinkIt();
//couldnt get this to work
// function blinkIt1() {
//   var blinks = document.getElementsByName("#blink1");
//   for (var i = 0, l = blinks.length; i < l; i++) {
//     var blink = blinks[i];
//     var visiblity = blink.style.visibility;
//     if (visiblity === "visible") {
//       blink.style.visibility = "hidden";
//       setTimeout(blinkIt1, 0.2);
//     } else {
//       blink.style.visibility = "visible";
//       setTimeout(blinkIt1, 1600);
//     }
//   }
// }
// blinkIt1();

// to make inner blink you can switch between border and no border, or make a new class with the attributes and switched between the two

console.log(setInterval);

// function blinkIt1() {
//   // event.stopPropagation(blink);
//   var blinks = document.getElementsByClassName("blink1");
//   for (var i = 0, l = blinks.length; i < l; i++) {
//     var blink = blinks[i];
//     var visiblity = blink.style.visibility;
//     blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
//     // if (blink.style.visibility == "visible") {
//     //   clearInterval(setInterval);
//     // } else {
//     //   return blinkIt1;
//     // }
//   }
// }

// // setInterval(blinkIt1, 3000 /* blinking interval in ms */);

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
  blinkIt();
  do {
    var numPick = prompt("Type a number between 8 and 128");
    var pwLength = parseInt(numPick.trim());
    console.log(pwLength);

    if (
      pwLength < 8 ||
      pwLength > 128 ||
      pwLength === NaN ||
      pwLength == ""
    ) {
      alert("Please enter a number between 8 and 128");
      // return false;
    }
  } while (pwLength < 8 || pwLength > 128 || pwLength === NaN || pwLength == "");

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
    // console.log(pwd);
  }

  return pwd;
}

//copy to clipboard code
copyEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Click");

  const copyToClipboard = () => {
    const el = document.createElement("textarea"); // Create a <textarea> element
    el.value = document.querySelector(".textarea").textContent; // Set its value to the string that you want copied
    el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
    el.style.position = "absolute";
    el.style.display = "hidden"; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    console.log(selected);
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }
  };

  copyToClipboard();
  console.log(el);
  console.log(copyEl);
});
