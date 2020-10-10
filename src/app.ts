abstract class Department {
  // private readonly id: string;
  // private name: string;
  private workers: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: number, protected name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string): object {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(worker: string) {
    this.workers.push(worker);
  }

  printWorkerInformation() {
    console.log(this.workers.length);
    console.log(this.workers);
  }
}

// const marketing = new Department(4, 'marketing');

// console.log(marketing.describe());

// marketing.addEmployee('Bob');
// marketing.addEmployee('Hal');
// marketing.addEmployee('Kal');
// marketing.printWorkerInformation();

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, 'IT');
  }

  describe(this: ITDepartment) {
    return `Tech department is: ${this.name} and id ${this.id.toString()}`;
  }
}

const IT = new ITDepartment(2, ['Kal']);
console.log(IT.describe());

console.log(Department.fiscalYear);

class Cleaning extends Department {
  constructor(id: number) {
    super(id, 'Cleaning');
  }
  describe(this: Cleaning) {
    console.log('The Cleaning department');
  }
}

abstract class Building {
  constructor(protected location: string) {}
}

class HRBuilding extends Building {
  private static instance: HRBuilding;

  private constructor(location: string) {
    super(location);
  }

  static getInstance() {
    if (HRBuilding.instance) {
      return this.instance;
    }
    this.instance = new HRBuilding('Main Street');
    return this.instance;
  }
}

const HR = HRBuilding.getInstance();
console.log(HR);

class Team {
  private _teamName: string;

  constructor() {
    this._teamName = '';
  }

  get teamName(): string {
    return this._teamName;
  }

  set teamName(value: string) {
    this._teamName = value;
  }
}
