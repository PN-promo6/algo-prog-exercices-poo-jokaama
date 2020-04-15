class Student {
  name: string;
  age: number;

  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    console.log("Le nom de l'élève est " + this.name. + "Il a " + this.age + " ans");

  }
}
let oneStudent: Student = new ("John", 24);
oneStudent.displayInfo();
