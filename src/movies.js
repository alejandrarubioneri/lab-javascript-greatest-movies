

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
    
    let unique = directors.filter(function (movie, index, acumulator){
        return acumulator.indexOf(movie) === index;
     });

 return unique;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
  let SpielbergDramas = movies.filter(function (movieDrama) {
    if (movieDrama.genre.indexOf('Drama') != -1 && movieDrama.director == 'Steven Spielberg') {
      return true;
    } 
  });
  return SpielbergDramas.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let sum = 0;
  let count = 0;

  movies.forEach(function(movie) {

    if(movie.rate != undefined) { 
      sum += movie.rate;
      count++;
    }
  });

  let average = (sum > 0 && count > 0 ? sum/count : 0);

  let averageTwoDecimals = Number(average.toFixed(2));
  return averageTwoDecimals;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

  let dramaMoviesAvg = movies.filter(function(movie){
    return (movie.genre.includes('Drama')?true:false);
  });

  return ratesAverage(dramaMoviesAvg);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  movies.sort(function (a, b) {
   return (a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year); 
 });
 return [...movies];
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  movies.sort(function(a, b) {
    if(a.movie < b.movie) {
      return movie.title;
    }

    if(a.movie > b.movie) {
      return movie.title;
    }
  });
  return [...movies];
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
