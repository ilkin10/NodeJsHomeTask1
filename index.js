const lo = require('lodash');
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = lo.filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]