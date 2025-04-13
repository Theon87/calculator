const screenMemory = document.getElementById("memory");
const screenMainInput = document.getElementById("mainInput");
const memoryValue = document.getElementById("memoryVal");
const mainVal = document.getElementById("mainVal");
const clear = document.getElementById("clear");
const clearLastEntry = document.getElementById("clearLastEntry");
const backspace = document.getElementById("backspace");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimalPoint = document.getElementById("decimalPoint");
const positiveNegative = document.getElementById("positiveNegative");
const percent = document.getElementById("percent");
const enter = document.getElementById("enter");

let mainDisplay = [0];
console.log(mainDisplay);

mainVal.innerHTML = mainDisplay;

// Event Listeners

clear.addEventListener("click", function () {
  mainDisplay = [0];
  console.log(mainDisplay);
});

backspace.addEventListener("click", function () {
  mainDisplay.pop();
  display();
  console.log(mainDisplay);
});

one.addEventListener("click", function () {
  mainDisplay.push(1);
  display();
  console.log(mainDisplay);
});

two.addEventListener("click", function () {
  mainDisplay.push(2);
  display();
  console.log(mainDisplay);
});

three.addEventListener("click", function () {
  mainDisplay.push(3);
  display();
  console.log(mainDisplay);
});

four.addEventListener("click", function () {
  mainDisplay.push(4);
  display();
  console.log(mainDisplay);
});

five.addEventListener("click", function () {
  mainDisplay.push(5);
  display();
  console.log(mainDisplay);
});

six.addEventListener("click", function () {
  mainDisplay.push(6);
  display();
  console.log(mainDisplay);
});

seven.addEventListener("click", function () {
  mainDisplay.push(7);
  display();
  console.log(mainDisplay);
});

eight.addEventListener("click", function () {
  mainDisplay.push(8);
  display();
  console.log(mainDisplay);
});

nine.addEventListener("click", function () {
  mainDisplay.push(9);
  display();
  console.log(mainDisplay);
});

zero.addEventListener("click", function () {
  mainDisplay.push(0);
  display();
  console.log(mainDisplay);
});

decimalPoint.addEventListener("click", function () {
  mainDisplay.push(".");
  display();
  console.log(mainDisplay);
});

positiveNegative.addEventListener("click", function () {
  mainDisplay.push("-");
  display();
  console.log(mainDisplay);
});

// Functions

function display() {
  if (mainDisplay.length > 0) {
    for (i = 0; i < mainDisplay.length; i++) {
      mainVal.innerHTML = mainDisplay[i];
    }
  } else {
    mainVal.innerHTML = 0;
  }
}
