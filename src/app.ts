// let and const
let age = 35;
const person = 'Hal';

// arrow function
const greet = (name: string) => {
  console.log(`hello, ${name}!`);
};

const add = (a: number, b: number) => a + b;

const hello = (info: string) => console.log(info);

const getName = (name: string, words?: string) => {
  if (words) {
    return `hello there, ${name}, ... ${words}!`;
  } else {
    return `hello there, ${name}!!!`;
  }
};

const getNewName = (name: string = 'Anonymous') => `howdy, ${name}....`;

console.log(getName(person, 'how are you'));
console.log(getNewName());

// spread operator
const items = ['pen', 'pencil', 'brush', 'cap', 'bottle'];
const moreItems = ['plate', 'glass', 'fork', ...items];

const user = {
  user_name: 'Bob',
  user_age: 35,
};
const copiedUser = { ...user };

// rest parameters
const multiply = (...numbers: number[]) => {
  return numbers.reduce((current, currentVal) => {
    return current * currentVal;
  }, 1);
};

const multiNumbers = multiply(5, 4, 100, 3, 2);
console.log(multiNumbers);

// array and object destructuring
const [firstHobby, secondHobby, ...otherItems] = items;
console.log(firstHobby);
console.log(otherItems);

const { user_name: myUserName, user_age: myUserAge } = user;
console.log(myUserName, myUserAge);
