
// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  let directorMovies = array.filter(movie => movie.director == director);
  // console.log("EXERCICE 2 ->", result);
  return directorMovies;

}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {
  //Use the function from exercice 2 to get movies of a Director
  let directorMovies = getMoviesFromDirector(array, director);
  // Calculate the sum of scores.
  let sumScore = directorMovies.reduce((acumulator, currentValue) =>
    acumulator + currentValue.score, 0);
  // Calculate the average and round it to 2 decimal places. 
  let average = Math.round((sumScore / directorMovies.length) * 100) / 100;
  // console.log("EXERCICE 3 ->", average);
  return average;
}


// Exercise 4:  Alphabetic order by title // 

function orderAlphabetically(array) {
  //Create a copy of the array to avoid modifying the original.
  let orderedArray = [...array];
  // Alphabetically order the copy of the array by the title.
  orderedArray.sort((first, second) => first.title.localeCompare(second.title));
  // Extract the titles of the first 20 movies.
  let shortArray = orderedArray.slice(0, 20).map(movie => movie.title);
  // console.log("EXERCICE 4 ->", shortArray);
  return shortArray;
}


// Exercise 5: Order by year, ascending

function orderByYear(array) {
  //Create a copy of the array to avoid modifying the original.
  let orderedArrayByYear = [...array];
  // Order the films by year.
  orderedArrayByYear.sort((first, second) => {
    if (first.year != second.year) {
      return first.year - second.year;
    } else {
      return first.title.localeCompare(second.title);
    }
  })
  // console.log("EXERCICE 5 ->", array);
  return orderedArrayByYear;
}


// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, genre) {
  // Filter movies that include the specific genre.
  let arrayCategory = array.filter(movie => movie.genre.includes(genre));
  // Calculate the average of movies' scores.
  let averageGenre = calculateAverage(arrayCategory);
  return averageGenre;
}

let calculateAverage = (array) => {
  //Calculate the sum of scores.
  let sumGenreScore = array.reduce((accumulator, currentValue) =>
    accumulator + currentValue.score, 0);
  // Calculate the average and round it to 2 decimal places.
  let averageGenre = Math.round((sumGenreScore / array.length) * 100) / 100;
  // console.log("EXERCICE 6 ->", averageGenre);
  return averageGenre;
}



// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  // Iterate over each film.
  return array.map(film => {
    // Declare hours and minutes by splitting in two the duration, replacing "min" to empty space and converting hours and mins to numbers.
    let [hours, mins] = film.duration.replace('min', '').split('h').map(num => Number(num));
    // Calculate the total of minutes by multiplying hours by 60 and adding minutes.
    let calculateTotalMinutes = hours * 60 + mins;
    // console.log({ ...film, duration: calculateTotalMinutes });
    return { ...film, duration: calculateTotalMinutes };
  });
}


// Exercise 8: Get the best film of a year

function bestFilmOfYear(array, year) {
  //Create a copy of the array to avoid modifying the original.
  let films = [...array];
  // Filter the movies by the specific year.
  let filmsOfYear = films.filter(film => film.year == year);
  // Initialize an array to store movies with the best score.
  let max = [];
  // Iterate through each element of the array to compare and find the movie/s with the best score.
  for (let i = 0; i < filmsOfYear.length; i++) {
    // Check if the array is empty, and add the movie.
    if (max.length === 0) {
      max.push(filmsOfYear[i]);
      // Check if the current movie has the same score as the one in the array and add it to the array. 
    } else if (filmsOfYear[i].score === max[0].score) {
      max.push(filmsOfYear[i]);
      // Check if the current movie has better score than the one in the array and replace it.
    } else if (filmsOfYear[i].score > max[0].score) {
      max = [filmsOfYear[i]];
    }
  }

  //console.log("Exercici 8 --> max);
  return max;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
