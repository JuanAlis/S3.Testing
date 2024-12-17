// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  let directors =  array.map(array => array.director); 
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directors =  array.filter(array => array.director === director); 
  directors.map(objetos => objetos.title);
  console.log("Excercice 2 -->", directors);
  return directors;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directors =  array.filter(array => array.director === director); 
  let scores = directors.map(scores => scores.score);
  let suma = scores.reduce((anterior, valorActual)=>{
    return anterior + valorActual;
  }, 0);
  let media = suma / scores.length;
  console.log("Excercice 3 -->", media.toFixed(2))
  return media;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map(movies => movies.title)
  let ordenar = titulos.sort((a, b)=>{
    return a.localeCompare(b);
  });
  let twenty = ordenar.slice(0, 20);
  console.log("Excercice -->", twenty);

  return twenty

}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let ascending = array.sort((a, b) =>{
    return a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title);


    });
    let years = ascending.map(antiguedad => {
    return {title: antiguedad.title, year: antiguedad.year};
    });
    console.log("Excercice 5 -->", years);

    return years

} 



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  let genero = array.filter((movie) => movie.genre.includes(genre));
  let scores = genero.map(scores => scores.score);
  let suma = scores.reduce((anterior, valorActual)=>{
    return anterior + valorActual;
  }, 0);
  let media = suma / scores.length;
  console.log("Generos", media.toFixed(2));
  return parseFloat(media.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let copie = array.map(movie => ({
    ...movie,}));

  copie.forEach(element => {
    let duration = element.duration;
    let numeros = duration.match(/\d+/g);
    let horas = parseInt(numeros[0]);
    let minutos = numeros[1] ? parseInt(numeros[1]) : 0 ; 
    let covertido =  horas * 60 + minutos 
    element.duration = covertido;
  });  
  console.log("Tiempo: ", copie)
  return copie
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  let produceTime = array.filter(movie => movie.year === year);
  let scores = produceTime.map(pelicula => pelicula.score);
  let maxscore = Math.max(...scores);
  let bestfilm = produceTime.filter(pelicula => pelicula.score === maxscore);
  console.log("Score mas alto del año",maxscore)
  console.log("Score mas alto del año",scores)
  console.log("mejor pelicula del año",bestfilm)
  return bestfilm
  
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
