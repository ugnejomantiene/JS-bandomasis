/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

function getData(){
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
 
      const movieList = document.getElementById('movieList');
      data.movies.forEach( movie => {
        const movieElement = document.createElement('p');

        const movieText = document.createTextNode(`${movie.title} - ${movie.castAndCrew.actors[0].name}`);
        console.log(movieText);
  
        movieElement.appendChild(movieText);
  
        // pridedame li elementa prie movieList div'o
        movieList.appendChild(movieElement);
      })
  
    })};
  
    // sukuriame eventListeneri window objektui, kad iskviestu funkcija getData, iskart kai puslapis uzsikraus
    window.addEventListener('load', getData);