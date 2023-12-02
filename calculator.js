const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

function add(firstNumber, secondNumber) {
  if (firstNumber === undefined || secondNumber === undefined)
    throw new Error("Function expects two arguments");
  return Number(firstNumber) + Number(secondNumber);
}
function subtract(firstNumber, secondNumber) {
  if (firstNumber === undefined || secondNumber === undefined)
    throw new Error("Function expects two arguments");
  return firstNumber - secondNumber;
}
function divide(firstNumber, secondNumber) {
  if (firstNumber === undefined || secondNumber === undefined)
    throw new Error("Function expects two arguments");
  return firstNumber / secondNumber;
}
function multiply(firstNumber, secondNumber) {
  if (firstNumber === undefined || secondNumber === undefined)
    throw new Error("Function expects two arguments");
  return firstNumber * secondNumber;
}
export default calculator;
