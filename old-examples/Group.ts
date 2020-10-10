class Group {
  private lastReport: string;

  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set setLastReport(value: string) {
    this.addReport(value);
  }

  get getID() {
    return this.id;
  }

  constructor(private id: number, private reports: string[]) {
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  static info() {
    return 'This is Group';
  }
}

const myGroup = new Group(5, []);
console.log(myGroup.getID);
myGroup.setLastReport = 'hello';
myGroup.setLastReport = 'items';
console.log(myGroup.getLastReport);
console.log(Group.info());
