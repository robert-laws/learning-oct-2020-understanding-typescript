// generics - basics
// const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 1000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// generic example with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Bob' }, { age: 5 }));

const mergedObj = merge({ name: 'Bob', hobbies: ['boating'] }, { age: 5 });
console.log(mergedObj.age);

// generic example with constraints
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length === 1) {
    description = 'Got 1 element.';
  } else if (element.length > 1) {
    description = 'Got ' + element.length + ' elements.';
  }
  return [element, description];
}

console.log(countAndDescribe('hello'));

// generic example using keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'Bob' }, 'name'));

// generic class
class DataStorage<T extends string | number | boolean> {
  private _data: T[] = [];

  addItem(item: T) {
    this._data.push(item);
  }

  removeItem(item: T) {
    this._data.splice(this._data.indexOf(item), 1);
  }

  getItems() {
    return [...this._data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('hal');
textStorage.addItem('bob');
textStorage.addItem('kal');
textStorage.removeItem('hal');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Bob' });
// objectStorage.addItem({ name: 'Hal' });

// objectStorage.removeItem({ name: 'Bob' });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Bob', 'Hal', 'Kal'];
// names.push('Jim'); // error
