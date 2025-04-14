// Variables -----------------------------------------------------------------------------------------------------------

const screenMemory = document.getElementById("memory");
const screenMainInput = document.getElementById("mainInput");
const memoryVal = document.getElementById("memoryVal");
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

let memoryDisplay = [];
console.log(memoryDisplay);
memoryVal.innerHTML = memoryDisplay;

let firstOperand = null;
let operator = null;

// Event Listeners -----------------------------------------------------------------------------------------------------

clear.addEventListener("click", function () {
  mainDisplay = [0];
  memoryDisplay = [];
  display();
  memoryVal.innerHTML = memoryDisplay;
  console.log(mainDisplay);
  console.log(memoryDisplay);
});

clearLastEntry.addEventListener("click", function () {
  mainDisplay = [0];
  display();
  console.log(mainDisplay);
});

backspace.addEventListener("click", function () {
  mainDisplay.pop();
  if (mainDisplay.length === 0) mainDisplay = [0];
  display();
  console.log(mainDisplay);
});

one.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(1);
  display();
  console.log(mainDisplay);
});

two.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(2);
  display();
  console.log(mainDisplay);
});

three.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(3);
  display();
  console.log(mainDisplay);
});

four.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(4);
  display();
  console.log(mainDisplay);
});

five.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(5);
  display();
  console.log(mainDisplay);
});

six.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(6);
  display();
  console.log(mainDisplay);
});

seven.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(7);
  display();
  console.log(mainDisplay);
});

eight.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(8);
  display();
  console.log(mainDisplay);
});

nine.addEventListener("click", function () {
  replaceLeadingZero();
  mainDisplay.push(9);
  display();
  console.log(mainDisplay);
});

zero.addEventListener("click", function () {
  replaceLeadingZero();
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
  let displayNum = parseFloat(mainDisplay.join("")) * -1;
  mainVal.innerHTML = displayNum;
  mainDisplay = [];
  mainDisplay.push(displayNum);
});

add.addEventListener("click", function () {
  firstOperand = parseFloat(mainDisplay.join(""));
  operator = "+";
  mainDisplay = [];
  showMemory();
  display();
  console.log("firstOperand: ", firstOperand);
});

subtract.addEventListener("click", function () {
  firstOperand = parseFloat(mainDisplay.join(""));
  operator = "-";
  mainDisplay = [];
  showMemory();
  display();
  console.log("firstOperand: ", firstOperand);
});

multiply.addEventListener("click", function () {
  firstOperand = parseFloat(mainDisplay.join(""));
  operator = "*";
  mainDisplay = [];
  showMemory();
  display();
  console.log("firstOperand: ", firstOperand);
});

divide.addEventListener("click", function () {
  firstOperand = parseFloat(mainDisplay.join(""));
  operator = "/";
  mainDisplay = [];
  showMemory();
  display();
  console.log("firstOperand: ", firstOperand);
});

percent.addEventListener("click", function () {
  firstOperand = parseFloat(mainDisplay.join(""));
  result = firstOperand / 100;
  mainDisplay = result.toString().split("");
  showMemory();
  display();
});

enter.addEventListener("click", function () {
  const secondOperand = parseFloat(mainDisplay.join(""));
  console.log("secondOperand: ", secondOperand);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      result = secondOperand;
  }

  console.log("operator: ", operator);
  mainDisplay = result.toString().split("");
  memoryVal.innerHTML = firstOperand + operator + secondOperand;
  firstOperand = null;
  operator = null;
  display();
  console.log("Result: ", result);
});

// Functions ---------------------------------------------------------------------------------------------------------

function display() {
  if (mainDisplay.length > 0) {
    mainVal.innerHTML = mainDisplay.join("");
  } else {
    mainVal.innerHTML = 0;
  }
}

function showMemory() {
  if (firstOperand > 0) {
    memoryVal.innerHTML = firstOperand;
  } else {
    memoryVal.innerHTML = null;
  }

  if (operator !== null) {
    memoryVal.innerHTML = firstOperand + operator;
  }
}

function replaceLeadingZero() {
  if (mainDisplay[0] === 0 && mainDisplay.length === 1) {
    mainDisplay.pop(0);
  }
}
