type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

console.log(combine(6, 5, 'as-number'));
console.log(combine('40', '33', 'as-number'));
console.log(combine('Bob', 'Cobb', 'as-text'));

// union types - accept more than one type of value
// let val: number | string;

// literal types - explicitly declare the value should be held in a variable
// const val = 5.25;
// val: 'admin' | 'user'

// type alias
// use keyword type and name of custom type
// type Combinable = string | number;
