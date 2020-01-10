// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(total);

// const result = numbers.reduce((acc,currentValue) => {
//      return acc += currentValue;
// },0)

// console.log(result)

// const names = ["Jimmy","Timmy","Bob"];

// const result = names.reduce((acc,currentValue) => {
//     return acc += currentValue.length;
// },0)

const students = [
  {
    name: "Cecile",
    age: 3
  },

  {
    name: "Anthony",
    age: 20
  },

  {
    name: "Pascal",
    age: 9
  }
];

// const result = students.reduce((acc, currentValue,index) => {
//   if (currentValue.name === "Pascal") {
//     acc.push(currentValue.name + index);
//   }
//   return acc;
// }, []);

// console.log(result);
// const result = students.reduce((acc, currentValue) => (acc += currentValue.age), 0);

// console.log(result);

const numbers = [10, 2, 10, 11, 13];

const result = numbers
  .sort((a, b) => b - a)
  .filter(value => value > 10)
  .map(value => value * 10);

console.log(result);
