class Book {
  price: number;
  title: string;

  constructor(price:number, title:string) {
    this.price = price;
    this.title = title;
  }
}

let newBook: Book = new Book("Harry Potter", 7.99) //Ceci est une instance de la classe Perso = exemplaire
console.log(newBook.title, newBook.price);
