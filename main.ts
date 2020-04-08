class ConcertTicket {
  nameTicket:string;
  idPlace: number;
  artist:string;
  type:string = "";


  constructor(nameTicket: string, idPlace: number, artist:string, type?:string) {
    this.nameTicket = price;
    this.idPlace = idPlace;
    this.artist = artist;
    this.type = type;
  }
  htmlDetails(): string {
    let content: `
    <p>Votre nom : ${this.nameTicket}</p>
    <p>Numéro de la place : ${this.idPlace}</p>
    <p>Nom de l'artiste : ${this.artist}</p> </br>
    `;
    if (this.type = "Dans la fosse") {
      content = content +  `<p>Type de place: Dans la fosse`
    } else {
      content + `<p>Type de place: Assise`
    }
  }
  return (content);
}
let ownerTicket01: ConcertTicket = new ConcertTicket("Florian Thauvin",269013, "Sniper", "Dans la fosse");
let ownerTicket02: ConcertTicket = new ConcertTicket("Florian Thauvin",269013, "Sniper", "Assise");
console.log(ownerTicket01.htmlDetails());
console.log(ownerTicket02.htmlDetails());
