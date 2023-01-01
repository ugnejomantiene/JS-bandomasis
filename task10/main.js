/*
  Sutvarkykite 10 užduoties failų kodą taip, kad veiktų main.js parašytas kodas.
*/

const asmenys = [
  asmuo1 = {
    vardas: "Jonas",
    lytis: "vyras",
    amzius: 5
  },
  asmuo2 = {
    vardas: "Majus",
    lytis: "vyras",
    amzius: 2
  },
  asmuo3 = {
    vardas: "Andrius",
    lytis: "vyras",
    amzius: 5
  },
  asmuo4 = {
    vardas: "Jonas",
    lytis: "vyras",
    amzius: 20
  },
  asmuo5 = {
    vardas: "Julius",
    lytis: "vyras",
    amzius: 5
  },
  asmuo6 = {
    vardas: "Jonas",
    lytis: "vyras",
    amzius: 14
  },
]


function vardoIlgis(obj) {
  return obj.vardas.length;
}

function lytis(obj) {
  return obj.lytis;
}

function pilnametyste(obj) {
  return obj.amzius >= 18;
}

let pirmas = vardoIlgis(asmenys[0]);
let antras = lytis(asmenys[1]);
let trecias = pilnametyste(asmenys[2]);
let ketvirtas = vardoIlgis(asmenys[3]);
let penktas = lytis(asmenys[4]);
let sesi = pilnametyste(asmenys[5]);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sesi);