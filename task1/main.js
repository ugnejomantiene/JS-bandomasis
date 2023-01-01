/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

const temperatureInput = document.getElementById('temperature-input'); // gauname elementą, kuriame vartotojas įves temperatūrą
const resultContainer = document.getElementById('result-container'); // gauname elementą, kuriame bus rodomas rezultatas

function convertTemperature() {
  const temperature = temperatureInput.value; // gauname įvestą temperatūrą
  let result; // sukuriame kintamajį rezultatui saugoti

  // nustatome, ar įvesta temperatūra yra celsijais ar farenheitais
  if (temperature.includes('C')) {
    // jeigu temperatūra yra celsijais, ją paverčiame į farenheitus
    result = (temperature.replace('C', '') * 9/5) + 32 + 'F';
  } else if (temperature.includes('F')) {
    // jeigu temperatūra yra farenheitais, ją paverčiame į celsijus
    result = (temperature.replace('F', '') - 32) * 5/9 + 'C';
  }

  // atnaujiname rezultato elemento turinį su gautu rezultatu
  resultContainer.innerHTML = result;
}

// pridedame event listener įvesties laukui, kad kiekvieną kartą, kai vartotojas pakeis įvestą temperatūrą, būtų vykdoma funkcija
temperatureInput.addEventListener('input', convertTemperature);