// types number, string, boolean
function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const subtract = (num1: number, num2: number): number => {
  return num1 - num2;
};

let myValue: number;
let number1 = 4;
const number2 = 5;
const printResult = true;

number1 = 8;

const result = add(number1, number2, printResult);

console.log(subtract(34, 21));
