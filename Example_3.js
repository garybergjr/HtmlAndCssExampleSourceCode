
function printHelloWorld() {
  var userInput = prompt("Please enter a number between 1 and 15");
  if(userInput >= 1 && userInput <= 15) {
    for (var i = 0;i<userInput;i++) {
      document.write("<br/> " + i + ". That message has been written.</br>");
    }
  }
  else {
      alert("You entered:" + userInput + "..please enter a number between 1 and 15!"); 
   }  
}

