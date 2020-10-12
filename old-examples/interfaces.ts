interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  _name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  _name: string;
  age = 34;

  constructor(n: string) {
    this._name = n;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = `${value} ... `;
  }

  greet = (phrase: string) => {
    console.log(`${this.name} says, ${phrase}`);
  };
}

// let userOne: Greetable;

let userOne = new Person('Bob');
userOne.name = 'Kalvin';

userOne.greet('hello there...');
