// const numbers = [1, 10,10, 2, 99, 3];

// numbers.sort((a, b) => {
//   return a - b;
// });

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// const names = ["abbigail", "John", "Beatrice", "Zoon", "Paola"]

// names.sort((a,b) => {
//     if(a.toLowerCase() < b.toLowerCase()) return 1;
//     if(a.toLowerCase() > b.toLowerCase()) return -1;
//     return 0;
// });

// console.log(names)

const students = [
  {
    name: "Andy",
    age: 9
  },
  {
    name: "Franck",
    age: 13
  },
  {
    name: "Mehmet",
    age: 17
  },
  {
    name: "Mehmet",
    age: 17
  },
  {
    name: "Shannon",
    age: 4
  }
];



const words = ["Hello", "supercalifragilisticexpialidocious", "bonjour", "ha"]

words.sort((a,b) => {
    return a.length - b.length;
})

console.log(words)