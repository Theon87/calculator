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
const three = document.getElementById("four");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimalPoint = document.getElementById("decimalPoint");
const positiveNegative = document.getElementById("positiveNegative");
const percent = document.getElementById("percent");
const enter = document.getElementById("enter");

one.addEventListener("click", function () {
  mainVal.innerHTML = 1;
});
