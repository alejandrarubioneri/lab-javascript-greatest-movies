const testArr2 = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      rate: 8.4
    }
  ];

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directors =  movies.map(function(movie){
       return movie.director;
  });

  return directors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let directors = getAllDirectors(movies);

function repeatedDirectors(directors) {
    
    var unique = directors.filter(function (movie, index, acumulator){
        return acumulator.indexOf(movie) === index;
     });

 return unique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?





// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
