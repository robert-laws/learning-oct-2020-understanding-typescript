// decorators
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering Template...');
        const hookElem = document.getElementById(hookId);
        if (hookElem) {
          hookElem.innerHTML = template;
          hookElem.querySelector('h2')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h2>My Person Object</h2>', 'app')
class Person {
  name = 'Kalvin';

  constructor() {
    console.log('Creating person object...');
  }
}

const per = new Person();

console.log(per.name);

// --------

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function LogTwo(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogThree(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogFour(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @LogTwo
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogThree
  getPriceWithTax(@LogFour tax: number) {
    return this._price * tax;
  }
}
