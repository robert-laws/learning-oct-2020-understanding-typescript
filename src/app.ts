// type Admin = {
//   name: string;
//   roles: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

interface Admin {
  name: string;
  roles: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Bob',
  roles: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Bob', 'Cobb');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Bob',
  job: { title: 'CEO', description: 'my company' },
};

// optional chaining operator - optionally check if something exists before proceeding
console.log(fetchedUserData?.job?.title);

// nullish coalescing
const newUserInput = null;
const storedData = newUserInput ?? 'input missing';

// type guard
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  // type guard for property in type
  if ('roles' in emp) {
    console.log('roles: ' + emp.roles);
  }
  if ('startDate' in emp) {
    console.log('start date: ' + emp.startDate);
  }
}

// discriminating unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 30 });

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById('user-input');
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'hello!';

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'howdy!';
}

// index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Enter a username that starts with a character',
};

// function overloads
