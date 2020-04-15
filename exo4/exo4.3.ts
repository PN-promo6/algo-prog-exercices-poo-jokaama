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
}
let userBank: Client = new Client("Silva", 650269)
console.log(userBank.getIdBank());


// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.
