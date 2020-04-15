class Client {
  private name: string;
  private idbank: number;

  constructor(name: string, idbank:number) {
    this.name = name;
    this.idbank = idbank
  }

  getIdBank(): number{
    return this.idbank
  }
  getName(): string { //Contient Silva
    return this.name
  }
  public setName(name:string): void { //Va remplacer par la nouvelle valeur. Void dit qu'on retourne 'rien'
    this.name = name
  }
}

let userBank: Client = new Client("Silva", 650269)
console.log(userBank.getIdBank());

userBank.setName("Bernardo Silva");
userBank.getName();
