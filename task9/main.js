/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/


class trueFalse {
  method1(num) {
    return num > 100;
  }

  method2(word) {
    return word[0] === word[0].toUpperCase();
  }

  method3(num) {
    return num % 2 === 0;
  }

  method4(word) {
    return word.length > 8;
  }
}

const trueFalseObj = new trueFalse();
console.log(trueFalseObj.method1(200));  // Output: true
console.log(trueFalseObj.method1(50));   // Output: false
console.log(trueFalseObj.method2("Hello"));  // Output: true
console.log(trueFalseObj.method2("world"));  // Output: false
console.log(trueFalseObj.method3(4));  // Output: true
console.log(trueFalseObj.method3(7));  // Output: false
console.log(trueFalseObj.method4("supercalifragilisticexpialidocious"));  // Output: true
console.log(trueFalseObj.method4("hello"));  // Output: false