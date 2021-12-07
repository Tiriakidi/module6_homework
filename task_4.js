function printNumbers(a, b) {
    let intervalId = setInterval(function() {
      console.log(a);
      if (a == b) {
        clearInterval(intervalId);
      }
      a++;
    }, 1000);
}
  
printNumbers(1, 4)

// with setTimeout

function printNumbers1(a, b) {
    console.log(a++);
    if (a <= b) {
        setTimeout(printNumbers, 1000, a, b);
    }
}