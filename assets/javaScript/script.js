function blinkIt() {
  var blinks = document.getElementsByClassName("blink");
  for (var i = 0, l = blinks.length; i < l; i++) {
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == "visible" ? "hidden" : "visible";
  }
}

setInterval(blinkIt, 1 /* blinking interval in ms */);

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

setInterval(blinkIt1, 3000 /* blinking interval in ms */);

console.log(setInterval);
