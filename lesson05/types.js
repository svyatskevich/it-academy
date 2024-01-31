// 1) Cложение различных типов:
console.log('Hello' + false);        // Hellofalse
console.log('How are you?' + 15);    // How are you?15
console.log(25 + true);              // 26

// 2) Умножение различных типов:
console.log('Hello' * true);         // NaN
console.log('How are you?' * 50);    // Nan
console.log(15 * false);             // 0

// 3) Деление различных типов:
console.log('Hello' / true);         // Nan
console.log('How are you?' / 5);     // Nan
console.log(50 / true);              // 50

// 4) Явное преобразование:

// Преобразование к number:
let str1 = '555';                    // string
let strToNum = Number(str1);         // 555
console.log(typeof strToNum);        // number

let bool1 = true;                    // boolean
let bool2 = false;                   // boolean
let trueToNum = Number(bool1);       // 1
let falseToNum = Number(bool2);      // 0
console.log(typeof trueToNum);       // number
console.log(typeof falseToNum);      // number


// Преобразование к string:
let num1 = 25;                       // number
let numToStr = String(num1);         // '25' 
console.log(typeof numToStr);        // string

let bool3 = false;                   // boolean
let boolToStr = String(bool3);       // 'false'
console.log(typeof boolToStr);       // string


// Преобразование к boolean:
let str2 = 'Hello';                  // string
let strToBool = Boolean(str2);       // true
console.log(typeof strToBool);       // boolean

let emptyStr = '';                   // string
let emptyStrToBool = Boolean(emptyStr); // false   
console.log(typeof emptyStrToBool);  // boolean

let num2 = 15;                       // number
let numToBoolean = Boolean(num2);    // true
console.log(typeof numToBoolean);    // boolean

let num3 = 1;                        // number
let num4 = 0;                        // number
let oneToBool = Boolean(num3)        // true
let zeroToBool = Boolean(num4);      // false
console.log(typeof oneToBool);       // boolean
console.log(typeof zeroToBool);      // boolean
