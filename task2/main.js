/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/
let image1Clicks = 0;
let image2Clicks = 0;

document.getElementById("image1").addEventListener("click", function() {
  image1Clicks++;
  document.getElementById("image1-clicks").innerHTML = image1Clicks;
});

document.getElementById("image2").addEventListener("click", function() {
  image2Clicks++;
  document.getElementById("image2-clicks").innerHTML = image2Clicks;
});