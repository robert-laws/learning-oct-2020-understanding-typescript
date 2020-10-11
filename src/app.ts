interface Greetable {
  _name: string;

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
