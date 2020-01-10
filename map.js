const numbers = [1, 10, 3, 15, 30];

const newNumbers = numbers.map((element, i) => {
  return element * 10;
});

console.log(newNumbers);

let grid = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

const modifiedGrid = grid.map(element => {
  return element.map(value => {
    return value * 2;
  });
});

// console.log(modifiedGrid)

const students = [
  {
    name: "Coline",
    computer: "Mac"
  },
  {
    name: "Baptiste",
    computer: "PC"
  },
  {
    name: "Andrew",
    computer: "Mac"
  }
];

// const studentNames = students.map(student => {
//     return student.name;
// });

// console.log(studentNames);

const ironhackers = students.map(student => {
  return (student.role = "Ironhackers");
});

console.log(ironhackers);
