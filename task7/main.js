/*
  Parašykite JS kodą, kuris turėtų funkciją.
  Funkcija kaip argumentą priima objektą. Funkcija grąžina masyvą.
  Funkcija iš gauto objekto turi atrinkti raktažodžius (Object.keys) ir sudėti juos į masyvą.
*/



function getObjectKeys(obj) {
  return Object.keys(obj);
}

const asmuo = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 25,
  lytis: "vyras",
  vedes: false
};

const keys = getObjectKeys(asmuo);
console.log(keys);  // Output: ["vardas", "pavarde", "amzius", "lytis", "vedes"]