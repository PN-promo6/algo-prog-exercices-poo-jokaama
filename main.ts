class ConcertTicket {
  nameTicket:string;
  idPlace: number;
  artist:string;
  typePlace:string = "";


  constructor(nameTicket: string, idPlace: number, artist:string, typePlace?:string) {
    this.nameTicket = nameTicket;
    this.idPlace = idPlace;
    this.artist = artist;
    if (typePlace) {
      this.typePlace = typePlace;
    };
  }
  htmlDetails(): string {
    let content: string = `
    <p>Votre nom : ${this.nameTicket}</p>
    <p>Numéro de la place : ${this.idPlace}</p>
    <p>Nom de l'artiste : ${this.artist}</p> </br>
    `;
    if (this.typePlace != "") {
      content = content +  `<p>Type de place: ${this.typePlace}</p>`
    }
      return (content);
  }

}
let ownerTicket01: ConcertTicket = new ConcertTicket("Florian Thauvin",269013, "Sniper", "Dans la fosse");
let ownerTicket02: ConcertTicket = new ConcertTicket("Florian Thauvin",269013, "Sniper");
console.log(ownerTicket01.htmlDetails());
console.log(ownerTicket02.htmlDetails());
