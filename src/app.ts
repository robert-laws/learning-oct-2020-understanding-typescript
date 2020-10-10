class Department {
  // private readonly id: string;
  // private name: string;
  private workers: string[] = [];

  constructor(private readonly id: number, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    return `Department: ${this.name}. And ID: ${this.id}.`;
  }

  addEmployee(worker: string) {
    this.workers.push(worker);
  }

  printWorkerInformation() {
    console.log(this.workers.length);
    console.log(this.workers);
  }
}

const marketing = new Department(4, 'marketing');

console.log(marketing.describe());

marketing.addEmployee('Bob');
marketing.addEmployee('Hal');
marketing.addEmployee('Kal');
marketing.printWorkerInformation();
