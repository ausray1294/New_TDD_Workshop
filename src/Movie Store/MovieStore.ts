// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export class Movie {
  title: string;
  inStock: boolean;
  daysRented: number;
  inventory: Array<string>;
  constructor(title: string) {
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
    this.inventory = [];
  }

  rentMovie() {
    this.inStock = false;
  }

  addMovie(movie: string): Array<string> {
    this.inventory.push(movie);
    console.log(this.inventory);
    return this.inventory;
  }
}
