//dont forget to import your functions


describe("Movie Store", () => {
  it('should add movies to an array', () => {
    expect(addMovies('Deadpool')).toBe(['Deadpool'])
  })

  it('should not add movies if not string', () => {
    expect(addMovies(4)).toBe('not a movie')
    expect(addMovies(false)).toBe('not a movie')
  })

});


//// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
