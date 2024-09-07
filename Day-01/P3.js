// In this example, the code inside the function will be executed after a 2-second delay.

setTimeout(function() {
    console.log("Hello, world!");
  }, 2000); // 2000 milliseconds = 2 seconds

//The setInterval() function in JavaScript is used to execute a block of code repeatedly at a specified interval. 

setInterval(function() {
    console.log("Hello, world!");
  }, 2000); // 2000 milliseconds = 2 seconds 



/*
The clearTimeout() function in JavaScript is used to cancel a timeout that was set using the setTimeout() function.

When you call setTimeout(), it returns a timeout ID, which is a unique identifier for the timeout. You can pass this timeout ID to clearTimeout() to cancel the timeout.
*/
let timeoutId = setTimeout(function() {
    console.log("Hello, world!");
  }, 2000);
  

// Cancel the timeout
clearTimeout(timeoutId);