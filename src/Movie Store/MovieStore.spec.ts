//dont forget to import your functions
import { Movie } from './MovieStore';

describe('Movie Store', () => {
  it('should add movies to an array', () => {
    const movie1 = new Movie('Deadpool');
    expect(movie1.addMovie).toBe(['Deadpool']);
  });
});

//// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
