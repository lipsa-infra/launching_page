document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "share", "engage with your most loyal fans", "monetize yourself"];
    var colors = ["red", "yellow", "orange"];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(index, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (dataText[index].length)) {
        // add next character to h1
       document.querySelector(".typewriter").innerHTML = dataText[index].substring(0, i+1);
       document.querySelector(".typewriter").style.color = colors[index];
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(index, i + 1, fnCallback)
        }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 1000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(i, 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });