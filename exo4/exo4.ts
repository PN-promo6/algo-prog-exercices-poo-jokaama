class Someone {
  firstname: string;
  lastname: string;
  bday: string;

  constructor(firstname: string, lastname: string, bday?: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    if (bday){
    this.bday = bday;
    }
  }
  fullName(){
  console.log("Elle s'appelle " + this.firstname + " " + this.lastname);

}
}
let ziggy: Someone = new Someone ("Ziggy", "Dion");
ziggy.fullName()

// Créez une classe représentant une personne avec :
// - un constructeur
// - un attribut pour le nom
// - un attribut pour le prénom
// - un attribut optionnel pour la date de naissance
// - une méthode pour afficher le nom complet de la personne
//
// Dans un algorithme, créez des instances de cette classe : une avec la date de naissance, une sans la date de naissance. Appelez la méthode affichant le nom complet de la personne pour chaque instance.
