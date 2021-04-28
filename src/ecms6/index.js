/**
 * Default Params
 */
 function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunctionES6(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
  }
  
  newFunctionES6();
  newFunctionES6('Ricardo', 23, 'Colombia');
  
  /**
   * Concatenation - Template Literals
   */
  let hello = 'Hello';
  let world = 'World';
  let epicPhrase = hello + ' ' + world + '!';
  
  // es6
  let epicPhraseES6 = `${hello} ${world}!`;
  
  console.log(epicPhrase);
  console.log(epicPhraseES6);

  //-----------------------------------------------------------------------
// Multilineas

let lorem = "Aqui esta una frase que tengo que poner \n"
+ "Otra frase epica."

// es6

let lorem2 = `otra frase diferente
ahora esta es otra frase mas
`;

console.log(lorem);
console.log(lorem2);

// ----------------------------------------------------------------------
// Como desestructurar 

let person = {
    'name': 'Antonio',
    'age': '28',
    'country': 'Ambato'
};
console.log(person.name, person.age, person.country);

// es6
let {name, age, country} = person;
console.log(name, age, country);

// ----------------------------------------------------------------------
// Spread Operator

let team1 =['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessenia', 'Camila'];

// es6
let education = ['David', ...team1, ...team2];
console.log(education);

// ---------------------------------------------------------------------
// Diferencia entre var y let

{
    var globalVar = "Globarl var";
}

{
    let globalLet = 'Global let'
    console.log(globalLet);
}
console.log(globalVar);

/* ------------------------------------------------------------------------
 * Parameters in Objects
 */
 let name = 'Oscar';
 let age = 32;
 
 const obj = {
   name: name,
   age: age
 };
 console.log('Before ES6 -> ', obj);
 
 // es6
 const objES6 = { name, age };
 console.log(`After ES6 -> `, objES6);
 
 /**
  * Arrow Functions
  */
 const names = [
   { name, age },
   { name: 'Yesica', age: 27 }
 ];
 
 let listOfNames = names.map(function(item) {
   console.log('Before ES6 -> ', item.name);
 }); //de la manera clasica
 
 // es6
 let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));
 
 /**
  * Promises
  */
 const helloPromise = (foo) => {
   return new Promise((resolve, reject) => {
     if (foo) {
       resolve('Hey!');
     } else {
       reject('Upss!');
     }
   });
 };
 
 const foo = false;
 helloPromise(foo)
   .then(response => console.log('response -> ', response))
   .then(() => console.log('message -> Hello World!'))
   
   
17
/**
 * Classes
 */
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log('Calc Result -> ', calc.sum(2, 3));

/**
 * Modules
 */
//import { hello } from './module.js';
const hello = require('./module')

console.log('Hello Module -> ', hello());

/**
 * Generators
 */
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World!';
  }
}
const generatorHello = helloWorld();
console.log('generatorHello first call -> ', generatorHello.next().value);
console.log('generatorHello second call -> ', generatorHello.next().value);
console.log('generatorHello third call -> ', generatorHello.next().value);