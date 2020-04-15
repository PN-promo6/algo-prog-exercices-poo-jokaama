class Furniture {
  designer: string;
  editor: string;
  year: number;
  constructor(designer: string, editor: string, year:number) {
    this.designer = designer;
    this.editor = editor;
    this.year = year;
  }
}
let furniture: Furniture = new Furniture("Marcel Breuer", "Knoll", 1926);
console.log(furniture.designer, furniture.editor, furniture.year);

// Créez une classe pour représenter un meuble design. Cette classe doit contenir trois attributs :
// - l’éditeur du meuble
// - le nom de la personne qui a designé le meuble
// - l’année de conception du meuble
//
// Dans un algorithme, créez une instance de cette classe. Cette instance est un objet représentant la chaise Wassily, crée par Marcel Breuer en 1925, et dont les droits d’édition appartiennent actuellement à l’entreprise Knoll.
// Affichez les informations concernant cette chaise, puis modifiez l’année de conception par 1926.
