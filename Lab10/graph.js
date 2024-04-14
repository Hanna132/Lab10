//Завдання 1

const fs = require('fs');

// Функція для зчитування графу з файлу
function readGraphFromFile(filename) {
    const data = fs.readFileSync(filename, 'utf8').trim().split('\n');
    const [n, m] = data[0].split(' ').map(Number); // Зчитуємо кількість вершин і ребер
    const edges = [];

    for (let i = 1; i <= m; i++) {
        const [start, end, weight] = data[i].split(' ').map(Number);
        edges.push({ start, end, weight });
    }

    return { n, m, edges };
}

// Приклад використання
const graphData = readGraphFromFile('input.txt');
console.log(graphData); // Виводимо зчитаний граф


//Завдання 2
// Функція для виведення матриці на екран
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === undefined) {
        row += "  "; // Замінює пусті значення на два пробіли
      } else {
        row += matrix[i][j] + " ";
      }
    }
    console.log(row);
  }
}

// Функція для запису матриці у текстовий файл
function writeMatrixToFile(matrix, filename) {
  const fs = require("fs");

  let data = "";
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === undefined) {
        row += "  "; // Замінює пусті значення на два пробіли
      } else {
        row += matrix[i][j] + " ";
      }
    }
    data += row + "\n";
  }

  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log("Матриця успішно записана у файл " + filename);
  });
}

// Дані зображення
const matrix = [
  [2, 1, 0],
  [4, 2, 2],
  [1, 3, 3],
];
// Використання
printMatrix(matrix);
writeMatrixToFile(matrix, "matrix.txt");