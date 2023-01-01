/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
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