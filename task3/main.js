/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

const button = document.querySelector('#show-user-button');
button.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {   
      document.querySelector("#user-container").innerHTML=`
     <div class="box">
        <img src="${data.results[0].picture.large}">
        <div class="info">
           <p> ${data.results[0].name.first} ${data.results[0].name.last}</p>
           <p>Age: ${data.results[0].dob.age}</p>
           <p>City: ${data.results[0].location.city}</p>
           <p>Address: ${data.results[0].location.street.name} ${data.results[0].location.street.number}</p>
           <p>Email: ${data.results[0].email}</p>
        </div>
     </div>`
      button.style.display = 'none';
      console.log(data.results[0]);
   
    });
});