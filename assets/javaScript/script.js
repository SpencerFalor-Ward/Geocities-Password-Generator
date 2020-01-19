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
      setTimeout(blinkIt, 1000);
    }
  }
}
blinkIt();

// to make inner blink you can switch between border and no border, or make a new class with the attributes and switched between the two

console.log(setInterval);

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

// html element references
var genEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");

console.log(this);

// password(prompt answer)
genEl.addEventListener("click", function(event) {
  event.preventDefault();
  // blinkIt();
  do {
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
      }
    } while (
      pwLength < 8 ||
      pwLength > 128 ||
      pwLength === NaN ||
      pwLength == ""
    );

    var alphLOn = confirm("Would you like to use lowercase letters?");
    var alphCOn = confirm("Would you like to use uppercase letters?");
    var numOn = confirm("Would you like to use numbers?");
    var spclOn = confirm("Would you like to use special characters?");
    var characters = "";

    alphLOn === true ? (characters += alphL) : "";
    alphCOn === true ? (characters += alphC) : "";
    numOn === true ? (characters += num) : "";
    spclOn === true ? (characters += spcl) : "";
  } while (alphLOn === false && alphCOn === false && numOn === false && spclOn === false);

  var yourPW = document.querySelector(".textarea");
  yourPW.textContent = password(pwLength, characters);
});

function password(l, characters) {
  var pwd = "";
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
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
